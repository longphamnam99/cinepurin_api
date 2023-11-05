import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsRepository } from './payments.repository';
import { PaymentsEntity } from 'src/entities/payments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentsEntity])],
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    {
      useClass: PaymentsRepository,
      provide: "IPaymentsRepository"
    }
  ]
})
export class PaymentsModule {}
