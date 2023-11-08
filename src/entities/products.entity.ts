import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinColumn, Double } from 'typeorm';

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

    @Column()
    category: string

    @Column('double', { precision: 10, scale: 3 })
    price: number;

    @Column()
    premiere: Date

    @Column()
    actor: string

    @Column()
    director: string

    @Column()
    type: number

    @Column()
    trailer: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}