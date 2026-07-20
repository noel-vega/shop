import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DRIZZLE } from 'src/database/database.constants';
import { usersTable, eq, type db as Db } from 'db';

@Injectable()
export class UsersService {
  constructor(@Inject(DRIZZLE) private readonly db: typeof Db) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async getByEmail(email: string){
    const [user] = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

      return user
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
