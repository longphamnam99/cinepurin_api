import { Module } from '@nestjs/common';
import { SlideshowController } from './slideshow.controller';
import { SlideshowService } from './slideshow.service';
import { SlideshowRepository } from './slideshow.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlideshowRepository])],
  controllers: [SlideshowController],
  providers: [SlideshowService]
})
export class SlideshowModule {}
