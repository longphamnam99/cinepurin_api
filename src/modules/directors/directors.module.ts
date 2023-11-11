import { Module } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsController } from './directors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorsEntity } from 'src/entities/directors.entity';
import { DirectorsRepository } from './directors.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DirectorsEntity])],
  controllers: [DirectorsController],
  providers: [
    DirectorsService,
    {
      useClass: DirectorsRepository,
      provide: 'IDirectorsRepository',
    }
  ],
})
export class DirectorsModule {}
