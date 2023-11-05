import { Role } from 'src/constant/enum';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('accounts')
export class AccountsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  permission: string;

  @Column()
  gender: number;

  @Column()
  birthday: string;

  @Column()
  address: string;

  @Column()
  idcard: string;

  @Column()
  phone: string;
  
  public roles: Role[]
}