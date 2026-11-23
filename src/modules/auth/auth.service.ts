import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../../entities/user.entity.js";
import { CreateUserDto } from "./dto/register.dto.js";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }
}
