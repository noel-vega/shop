import { Global, Module } from '@nestjs/common';
import { db } from 'db';
import { DRIZZLE } from './database.constants';

@Global()
@Module({
  providers: [{ provide: DRIZZLE, useValue: db }],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
