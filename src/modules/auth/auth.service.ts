import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../../entities/user.entity.js";
import { CredentialsService } from "../credentials/credentials.service.js";
import { CreateUserDto } from "./dto/register.dto.js";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly credentialsService: CredentialsService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await this.credentialsService.hashPassword(createUserDto.password);
    return await this.userRepository.save({ ...createUserDto, password: hashedPassword });
  }
}
