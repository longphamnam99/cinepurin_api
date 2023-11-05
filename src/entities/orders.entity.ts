import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('orders')
export class OrdersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    movie_id: number;

    @Column()
    payment_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
