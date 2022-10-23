import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt/dist';
import { from, Observable, of } from 'rxjs';
import { UserI } from 'src/users/models/user.interface';
import { compare, hash } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  /**
   * @param user 
   * @returns user
   */
  generateJWT(user: UserI): Observable<string> {
    return from(this.jwtService.signAsync({ user }))
  }

  /**
   * @param password 
   * @returns Hashed password
   */
  hashPassword(password: string): Observable<string> {
    return from(hash(password, 10))
  }

  /**
   * @param newPassword 
   * @param password 
   * @returns comparing password
   */
  comparePassword(newPassword: string, password: string): Observable<any | boolean> {
    return of<any | boolean>(compare(newPassword, password))
  }
}