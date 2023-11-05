import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrdersEntity } from "src/entities/orders.entity";
import { BaseRepository } from "src/interfaces/BaseRepository.interface";
import { IOrderRepository } from "src/interfaces/IOrderRepository.interface";
import { Repository } from "typeorm";

@Injectable()
export class OrdersRepository
    extends BaseRepository<OrdersEntity, Repository<OrdersEntity>>
    implements IOrderRepository {
        
    constructor(
        @InjectRepository(OrdersEntity)
        protected readonly repository: Repository<OrdersEntity>) {
        super(repository);
    }
}