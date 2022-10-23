import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/entities/user.entities';
import { UserI } from '../models/user.interface';
import { catchError, from, map, Observable, switchMap, throwError } from 'rxjs'
import { AuthService } from 'src/auth/services/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private readonly authService: AuthService
  ) { }

  createUser(user: UserI): Observable<UserI> {
    return this.authService.hashPassword(user.password).pipe(
      switchMap((passwordHash: string) => {
        const newUser = new UserEntity()
        newUser.name = user.name
        newUser.email = user.email
        newUser.username = user.username
        newUser.password = passwordHash
        return from(this.userRepository.save(newUser)).pipe(
          map((user: UserI) => {
            const { password, ...data } = user
            return data
          }),
          catchError(err => throwError(err))
        )
      })
    )
  }

  findOne(id: number): Observable<UserI> {
    return from(this.userRepository.findOne({ where: { id: id } })).pipe(
      map((user: UserI) => {
        const { password, ...data } = user
        return data
      })
    )
  }

  findAll(): Observable<UserI[]> {
    return from(this.userRepository.find()).pipe(
      map((users: UserI[]) => {
        users.forEach((u) => { delete u.password })
        return users
      })
    )
  }

  deleteOne(id: number): Observable<any> {
    return from(this.userRepository.delete({ id }))
  }

  updateOne(id: number, user: UserI): Observable<any> {
    return from(this.userRepository.update({ id }, { ...user }))
  }

  login(user: UserI) {

  }
  validateUser() {

  }
  findByMail(email: string) {
    return from(this.userRepository.findOne({ where: { email } }))
  }
}