import { PrimaryGeneratedColumn, Column, Entity, BeforeInsert } from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column({ unique: true })
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase()
  }
}