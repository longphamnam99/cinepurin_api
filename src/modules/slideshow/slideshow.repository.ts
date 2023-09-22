import { EntityRepository, Repository } from 'typeorm';
import { Slideshow } from 'src/entities/slideshow.entity';

@EntityRepository(Slideshow)
export class SlideshowRepository extends Repository<Slideshow> {
    async getAllSlideshows(): Promise<Slideshow[]> {
        return this.find();
    }
}
