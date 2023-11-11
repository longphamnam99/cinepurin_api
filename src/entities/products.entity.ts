import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinColumn, Double, ManyToOne } from 'typeorm';

import { CategoriesEntity } from './categories.entity';

@Entity('products')
export class ProductsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column({ nullable: true })
    description: string | null;

    @Column({ type: 'json', nullable: true })
    category: number[];

    @Column('double', { precision: 10, scale: 3 })
    price: number;

    @Column()
    premiere: Date

    @Column({ type: 'json', nullable: true })
    actor: number[];

    @Column({ type: 'json', nullable: true })
    director: number[];

    @Column()
    type: number

    @Column()
    trailer: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}