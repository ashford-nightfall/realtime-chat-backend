import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../../entities/user.entity.js";
import { CredentialsService } from "../credentials/credentials.service.js";
import { AuthUserDto } from "./dto/register.dto.js";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly credentialsService: CredentialsService,
  ) {}

  async register(authUserDto: AuthUserDto) {
    const hashedPassword = await this.credentialsService.hashPassword(authUserDto.password);
    return await this.userRepository.save({ ...authUserDto, password: hashedPassword });
  }

  async login(authUserDto: AuthUserDto) {
    const user = await this.userRepository.findOneBy({ email: authUserDto.email });

    if (!user) {
      throw new UnauthorizedException("User is not found");
    }

    const isPasswordValid = await this.credentialsService.checkPassword({
      password: authUserDto.password,
      storedHash: user.password,
    });

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    return user;
  }
}
