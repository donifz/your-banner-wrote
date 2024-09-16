import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    console.log(user, 'user');

    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const { username, email, id } = user;

    return {
      id,
      username,
      email,
      access_token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
}
