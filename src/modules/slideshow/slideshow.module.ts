import { Module } from '@nestjs/common';
import { SlideshowController } from './slideshow.controller';
import { SlideshowService } from './slideshow.service';
import { SlideshowRepository } from './slideshow.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlideshowEntity } from 'src/entities/slideshows.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SlideshowEntity])],
  controllers: [SlideshowController],
  providers: [
    SlideshowService,
    {
      useClass: SlideshowRepository,
      provide: 'ISlideshowRepository',
    }
  ],
})
export class SlideshowModule {}
