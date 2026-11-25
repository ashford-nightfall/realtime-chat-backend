import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import { ROUTES } from "../../common/constants/routes.constants.js";
import { ZodValidationPipe } from "../../common/pipes/zod-validation.pipe.js";
import { AuthService } from "./auth.service.js";
import { type AuthUserDto, authUserSchema } from "./dto/register.dto.js";

@Controller(ROUTES.AUTH.BASE)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(ROUTES.AUTH.REGISTER)
  @UsePipes(new ZodValidationPipe(authUserSchema))
  async register(@Body() authUserDto: AuthUserDto) {
    const user = await this.authService.register(authUserDto);

    const { password: _, ...rest } = user;

    return rest;
  }

  @Post(ROUTES.AUTH.LOGIN)
  @UsePipes(new ZodValidationPipe(authUserSchema))
  async login(@Body() authUserDto: AuthUserDto) {
    return await this.authService.login(authUserDto);
  }
}
