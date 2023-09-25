import { Injectable, Inject } from '@nestjs/common';
import { SlideshowDto } from 'src/dto/slideshow.dto';
import { Slideshow } from 'src/models/slideshow.model';
import { ISlideshowRepository } from 'src/interfaces/ISlideshowRepository.interface';

@Injectable()
export class SlideshowService {
    constructor(
        @Inject('ISlideshowRepository')
        private readonly slideshowRepository: ISlideshowRepository
    ) {}
    private Slideshows: SlideshowDto[] = [
        { id: 1, name: 'Slideshow 0', url: '', caption: '' },
        { id: 2, name: 'Slideshow 1', url: '', caption: '' },
        { id: 3, name: 'Slideshow 2', url: '', caption: '' },
    ];

    async findAll(): Promise<Slideshow[]> {
        return await this.slideshowRepository.findAll();
    }

    createSlideshow(data: SlideshowDto): SlideshowDto {
        return data;
    }

    updateSlideshow(id: number): SlideshowDto {
        return this.Slideshows.find((e) => e.id == id);
    }
}
