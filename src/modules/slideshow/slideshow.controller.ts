import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, ValidationPipe } from '@nestjs/common';
import { SlideshowService } from './slideshow.service';
import { ResponseData } from 'src/services/response.service';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { Slideshow } from 'src/models/slideshow.model';
import { ResponseType } from 'src/constant/type';
import { Response } from 'express';
import { Public } from 'src/constant/decorator';

@Controller('slideshow')
export class SlideshowController {
    constructor(private readonly SlideshowService: SlideshowService) {}

    @Public()
    @Get()
    async list(@Res() res: Response) : Promise<ResponseType<Slideshow>> {
        try {
            return res.json(new ResponseData(await this.SlideshowService.findAll(), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(error, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }

    // @Post()
    // createSlideshow(@Body(new ValidationPipe()) data: SlideshowDto): ResponseData<Slideshow[]> {
    //     try {
    //         return new ResponseData<Slideshow[]>(this.SlideshowService.createSlideshow(), HttpStatus.OK, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
    //     }
    // }

    // @Put('/:id')
    // updateSlideshow(@Param('id') id: number): ResponseData<Slideshow[]> {
    //     try {
    //         return new ResponseData<Slideshow[]>(this.SlideshowService.updateSlideshow(id), HttpStatus.OK, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
    //     }
    // }

    // @Delete('/:id')
    // deleteSlideshow(): ResponseData<Slideshow[]> {
    //     try {
    //         return new ResponseData<Slideshow[]>(this.SlideshowService.deleteSlideshow(), HttpStatus.OK, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Slideshow[]>(null, HttpStatus.NOT_FOUND, HttpMessage.ERROR);
    //     }
    // }
}
