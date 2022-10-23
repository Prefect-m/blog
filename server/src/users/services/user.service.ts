import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/entities/user.entities';
import { UserI } from '../models/user.interface';
import { from, Observable } from 'rxjs'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) { }

  createUser(user: UserI): Observable<UserI> {
    return from(this.userRepository.save(user))
  }

  findOne(id: number): Observable<UserI> {
    return from(this.userRepository.findOne({ where: { id: id } }))
  }

  findAll(): Observable<UserI[]> {
    return from(this.userRepository.find())
  }

  deleteOne(id: number): Observable<any> {
    return from(this.userRepository.delete({ id }))
  }

  updateOne(id: number, user: UserI): Observable<any> {
    return from(this.userRepository.update({ id }, { ...user }))
  }
}