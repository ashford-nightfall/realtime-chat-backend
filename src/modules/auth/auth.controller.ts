import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import { ZodValidationPipe } from "../../common/pipes/zod-validation.pipe.js";
import { type CreateUserDto, createUserSchema } from "./dto/register.dto.js";

@Controller("auth")
export class AuthController {
  @Post("/register")
  @UsePipes(new ZodValidationPipe(createUserSchema))
  register(@Body() createUserDto: CreateUserDto) {
    return `This is the /register route in AuthController | email ${createUserDto.email}`;
  }
}
