import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import { ZodValidationPipe } from "../../common/pipes/zod-validation.pipe.js";
import { AuthService } from "./auth.service.js";
import { type AuthUserDto, authUserSchema } from "./dto/register.dto.js";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/register")
  @UsePipes(new ZodValidationPipe(authUserSchema))
  async register(@Body() authUserDto: AuthUserDto) {
    const user = await this.authService.register(authUserDto);

    const { password: _, ...rest } = user;

    return rest;
  }

  @Post("/login")
  @UsePipes(new ZodValidationPipe(authUserSchema))
  async login(@Body() authUserDto: AuthUserDto) {
    return await this.authService.login(authUserDto);
  }
}
