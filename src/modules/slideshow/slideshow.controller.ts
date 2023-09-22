import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { SlideshowService } from './slideshow.service';
import { ResponseData } from 'src/global/ResponseData';
import { HttpMessage } from 'src/global/HttpNotify';
import { Slideshow } from 'src/models/slideshow.model';
import { SlideshowDto } from 'src/dto/slideshow.dto';

@Controller('slideshow')
export class SlideshowController {
    constructor(private readonly SlideshowService: SlideshowService) {}

    @Get()
    async getSlideshow(): ResponseData<Slideshow[]> {
        try {
            return new ResponseData<Slideshow[]>(this.SlideshowService.createSlideshow(), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Post()
    createSlideshow(@Body(new ValidationPipe()) data: SlideshowDto): ResponseData<Slideshow[]> {
        try {
            return new ResponseData<Slideshow[]>(this.SlideshowService.createSlideshow(), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateSlideshow(@Param('id') id: number): ResponseData<Slideshow[]> {
        try {
            return new ResponseData<Slideshow[]>(this.SlideshowService.updateSlideshow(id), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteSlideshow(): ResponseData<Slideshow[]> {
        try {
            return new ResponseData<Slideshow[]>(this.SlideshowService.deleteSlideshow(), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
        }
    }
}
