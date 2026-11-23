import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "../../entities/user.entity.js";
import { CredentialsModule } from "../credentials/credentials.module.js";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";

@Module({
  imports: [TypeOrmModule.forFeature([User]), CredentialsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
