import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('vnpay')
export class VnpayEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vnp_amount: string;

    @Column()
    vnp_tmn_code: string;

    @Column()
    vnp_trans_date: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
