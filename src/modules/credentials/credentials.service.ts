import { PasswordHasher } from "@nestjs/authentication";
import { Injectable } from "@nestjs/common";

type CheckPasswordArgs = {
  password: string;
  storedHash: string;
};

@Injectable()
export class CredentialsService {
  constructor(private readonly passwordHasher: PasswordHasher) {}

  async hashPassword(password: string) {
    return this.passwordHasher.hash(password);
  }

  async checkPassword({ password, storedHash }: CheckPasswordArgs) {
    return this.passwordHasher.verify(password, storedHash);
  }
}
