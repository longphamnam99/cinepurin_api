import { Inject, Injectable } from '@nestjs/common';
import { IOrderRepository } from 'src/interfaces/IOrderRepository.interface';

@Injectable()
export class OrdersService {
    constructor(
        @Inject('IOrderRepository')
        private readonly orderRepository: IOrderRepository
    ) {}
}
