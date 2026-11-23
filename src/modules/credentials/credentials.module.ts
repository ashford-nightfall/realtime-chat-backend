import { AuthenticationModule } from "@nestjs/authentication";
import { Module } from "@nestjs/common";

import { CredentialsService } from "./credentials.service.js";

@Module({
  imports: [AuthenticationModule.forRoot()],
  providers: [CredentialsService],
})
export class CredentialsModule {}
