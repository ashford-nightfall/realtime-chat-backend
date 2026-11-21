import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/register')
  register() {
    return 'This is the /register route in AuthController';
  }
}
