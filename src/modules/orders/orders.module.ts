import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from 'src/entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity])],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      useClass: OrdersRepository,
      provide: "IOrderRepository"
    }
  ]
})
export class OrdersModule {}
