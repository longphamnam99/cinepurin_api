import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { Public } from 'src/constant/decorator';
import { ResponseType } from 'src/constant/type';
import { Director } from 'src/models/Director.model';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'helpers/config';
import { Multer } from 'multer';
import { DirectorDto } from 'src/dto/director.dto';

@Controller('directors')
export class DirectorsController {
    constructor(private readonly directorsService: DirectorsService) { }

    @Public()
    @Get()
    async list(@Res() res: Response): Promise<ResponseType<Director>> {
        try {
            return res.json(
                new ResponseData(
                    await this.directorsService.findAll(),
                    ServerStatus.OK,
                    ServerMessage.OK,
                ),
            );
        } catch (error) {
            return res.json(
                new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
            );
        }
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', { storage: storageConfig() }))
    async create(
        @Body() data: DirectorDto,
        @UploadedFile() file: Multer.File,
        @Res() res: Response,
    ): Promise<ResponseType<Director>> {
        const dataSend = {
            ...data,
            image: `/static/uploads/${file.filename}`,
        };
        try {
            return res.json(
                new ResponseData(
                    await this.directorsService.create(dataSend),
                    ServerStatus.OK,
                    ServerMessage.OK,
                ),
            );
        } catch (error) {
            console.log(error);
            return res.json(
                new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
            );
        }
    }

    @Public()
    @Get('/:id')
    async detailProduct(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Director>> {
        try {
            return res.json(new ResponseData(await this.directorsService.findById(id), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }

    @Public()
    @Put('/:id')
    @UseInterceptors(FileInterceptor('image', { storage: storageConfig() }))
    async updateProduct(@Param('id') id: number, @Body() data: DirectorDto, @UploadedFile() file: Multer.File, @Res() res: Response): Promise<ResponseType<Director>> {
        try {
            const dataSend = {
                ...data,
                image: `/static/uploads/${file.filename}`,
            }
            return res.json(new ResponseData(await this.directorsService.update(id, dataSend), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            console.log(error)
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }

    @Public()
    @Delete('/:id')
    async deleteProduct(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Director>> {
        try {
            return res.json(new ResponseData(await this.directorsService.delete(id), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
}
