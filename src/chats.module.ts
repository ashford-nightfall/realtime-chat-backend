import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity.js';

@Module({ imports: [TypeOrmModule.forFeature([Chat])] })
export class ChatsModule {}
