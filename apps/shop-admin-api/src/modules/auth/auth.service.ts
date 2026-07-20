import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import type { db as Db } from 'db';
import { DRIZZLE } from '../../database/database.constants';
import { SignInDto } from './dto/signin.dto';
import { CreateUserDto } from './dto/create-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DRIZZLE) private readonly db: typeof Db,
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async signin(signinDto: SignInDto) {
    const user = await this.usersService.getByEmail(signinDto.email)

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if(user.password !== signinDto.password) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.id, email: user.email}

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  createUser(createUserDto: CreateUserDto) {
    return 'This action creates a new user';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }


  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
