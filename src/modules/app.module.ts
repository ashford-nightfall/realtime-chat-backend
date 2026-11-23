import "dotenv/config";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { createObserveModule } from "@nestjs/observe";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ChatParticipant } from "../entities/chat-participant.entity.js";
import { Chat } from "../entities/chat.entity.js";
import { Message } from "../entities/message.entity.js";
import { User } from "../entities/user.entity.js";
import { AuthModule } from "./auth/auth.module.js";
import { ChatParticipantsModule } from "./chat/chat-participants.module.js";
import { ChatsModule } from "./chat/chats.module.js";
import { MessagesModule } from "./chat/messages.module.js";
import { UsersModule } from "./chat/users.module.js";
import { CredentialsModule } from './credentials/credentials.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? "YOUR_APP_KEY",
      appSecret: process.env.OBSERVE_APP_SECRET ?? "YOUR_APP_SECRET",
      serviceId: "realtime-chat-backend",
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_NAME"),
        entities: [User, Chat, Message, ChatParticipant],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ChatsModule,
    MessagesModule,
    ChatParticipantsModule,
    AuthModule,
    CredentialsModule,
  ],
})
export class AppModule {}
