import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlideshowDto } from 'src/dto/slideshow.dto';
import { Slideshow } from 'src/entities/slideshow.entity';
import { SlideshowRepository } from './slideshow.repository';

@Injectable()
export class SlideshowService {
    constructor(
        @InjectRepository(SlideshowRepository)
        private slideshowRepository: Repository<SlideshowRepository>,
    ) {}
    private Slideshows: SlideshowDto[] = [
        { id: 1, name: 'Slideshow 0', url: '', caption: '' },
        { id: 2, name: 'Slideshow 1', url: '', caption: '' },
        { id: 3, name: 'Slideshow 2', url: '', caption: '' },
    ];

    async getSlideshow(): Promise<Slideshow[]> {
        return this.slideshowRepository.find();
    }

    createSlideshow(data: SlideshowDto): SlideshowDto {
        return data;
    }

    updateSlideshow(id: number): SlideshowDto {
        return this.Slideshows.find((e) => e.id == id);
    }
}
