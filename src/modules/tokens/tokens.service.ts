import { TokenService } from "@nestjs/authentication";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TokensService {
  constructor(private readonly tokenService: TokenService) {}

  issueAccessToken(userId: string) {
    return this.tokenService.issue(userId);
  }
}
