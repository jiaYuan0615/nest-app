import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AppService } from '../services/app.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
