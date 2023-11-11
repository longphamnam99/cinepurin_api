import { Module } from '@nestjs/common';
import { ActorsController } from './actors.controller';
import { ActorsService } from './actors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorsEntity } from 'src/entities/actors.entity';
import { ActorRepository } from './actors.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActorsEntity])],
  controllers: [ActorsController],
  providers: [
    ActorsService,
    {
      useClass: ActorRepository,
      provide: 'IActorsRepository',
    }
  ]
})
export class ActorsModule {}
