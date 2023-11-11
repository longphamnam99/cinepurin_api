import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/interfaces/BaseRepository.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DirectorsEntity } from 'src/entities/directors.entity';
import { IDirectorsRepository } from 'src/interfaces/IDirectorsRepository.interface';

@Injectable()
export class DirectorsRepository
    extends BaseRepository<DirectorsEntity, Repository<DirectorsEntity>>
    implements IDirectorsRepository {

    constructor(
        @InjectRepository(DirectorsEntity)
        protected readonly repository: Repository<DirectorsEntity>) {
        super(repository);
    }
}