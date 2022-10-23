import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './models/entities/user.entities';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }