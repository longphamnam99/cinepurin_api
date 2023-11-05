import { Module } from '@nestjs/common';
import { VnpayService } from './vnpay.service';
import { VnpayController } from './vnpay.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VnpayEntity } from 'src/entities/vnpay.entity';
import { VnpayRepository } from './vnpay.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VnpayEntity])],
  controllers: [VnpayController],
  providers: [
    VnpayService,
    {
      useClass: VnpayRepository,
      provide: 'IVnpayRepository',
    }
  ],
})

export class VnpayModule {}
