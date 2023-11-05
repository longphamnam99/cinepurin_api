import { Controller, Get, Res } from '@nestjs/common';
import { Public } from 'src/constant/decorator';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Public()
    @Get()
    getList() {
        return "abc"
    }
}
