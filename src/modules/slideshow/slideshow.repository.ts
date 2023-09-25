import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SlideshowEntity } from 'src/entities/slideshows.entity';
import { BaseRepository } from 'src/interfaces/BaseRepository.interface';
import { ISlideshowRepository } from 'src/interfaces/ISlideshowRepository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class SlideshowRepository
    extends BaseRepository<SlideshowEntity, Repository<SlideshowEntity>>
    implements ISlideshowRepository {

    constructor(
        @InjectRepository(SlideshowEntity)
        protected readonly repository: Repository<SlideshowEntity>) {
        super(repository);
    }
}