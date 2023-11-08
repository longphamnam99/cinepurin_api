import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { CarsEntity } from './cars.entity';

@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}