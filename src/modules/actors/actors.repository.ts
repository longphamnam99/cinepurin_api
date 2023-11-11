import { Injectable } from '@nestjs/common';
import { IActorsRepository } from 'src/interfaces/IActorsRepository.interface';
import { BaseRepository } from 'src/interfaces/BaseRepository.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ActorsEntity } from 'src/entities/actors.entity';

@Injectable()
export class ActorRepository
    extends BaseRepository<ActorsEntity, Repository<ActorsEntity>>
    implements IActorsRepository {

    constructor(
        @InjectRepository(ActorsEntity)
        protected readonly repository: Repository<ActorsEntity>) {
        super(repository);
    }
}