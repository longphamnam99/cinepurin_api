import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentsEntity } from "src/entities/payments.entity";
import { BaseRepository } from "src/interfaces/BaseRepository.interface";
import { IPaymentsRepository } from "src/interfaces/IPaymentsRepository.interface";
import { Repository } from "typeorm";

@Injectable()
export class PaymentsRepository
    extends BaseRepository<PaymentsEntity, Repository<PaymentsEntity>>
    implements IPaymentsRepository {
        
    constructor(
        @InjectRepository(PaymentsEntity)
        protected readonly repository: Repository<PaymentsEntity>) {
        super(repository);
    }
}