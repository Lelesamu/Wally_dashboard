import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(dto: RegisterDto) {
  const existing = await this.usersService.findByUsername(dto.username);
  if (existing) throw new UnauthorizedException("Email already in use");

  const hashed = await bcrypt.hash(dto.password, 10);
  const user = await this.usersService.create({
    ...dto,
    password: hashed,
  });

  const { password: _, ...safeUser } = user;
  return safeUser;
}

  async login(dto: LoginDto) {
    const user = await this.usersService.findByUsername(dto.username);
    const valid = user && (await bcrypt.compare(dto.password, user.password));
    if (!valid) throw new UnauthorizedException("Invalid credentials");

    const payload = { sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}