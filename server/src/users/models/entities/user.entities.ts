import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column({ unique: true })
  username: string
}