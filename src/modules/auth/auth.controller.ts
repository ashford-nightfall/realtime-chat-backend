import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import { ZodValidationPipe } from "../../common/pipes/zod-validation.pipe.js";
import { AuthService } from "./auth.service.js";
import { type CreateUserDto, createUserSchema } from "./dto/register.dto.js";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/register")
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.register(createUserDto);

    const { password: _, ...rest } = user;

    return rest;
  }
}
