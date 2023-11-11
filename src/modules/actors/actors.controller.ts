import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ActorsService } from './actors.service';
import { Public } from 'src/constant/decorator';
import { ResponseType } from 'src/constant/type';
import { Actor } from 'src/models/Actor.model';
import { ResponseData } from 'src/services/response.service';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'helpers/config';
import { ActorDto } from 'src/dto/actor.dto';
import { Multer } from 'multer';

@Controller('actors')
export class ActorsController {
    constructor(private readonly actorsService: ActorsService) { }

    @Public()
    @Get()
    async list(@Res() res: Response): Promise<ResponseType<Actor>> {
        try {
            return res.json(
                new ResponseData(
                    await this.actorsService.findAll(),
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
        @Body() data: ActorDto,
        @UploadedFile() file: Multer.File,
        @Res() res: Response,
    ): Promise<ResponseType<Actor>> {
        const dataSend = {
            ...data,
            image: `/static/uploads/${file.filename}`,
        };
        try {
            return res.json(
                new ResponseData(
                    await this.actorsService.create(dataSend),
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
    async detailProduct(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Actor>> {
        try {
            return res.json(new ResponseData(await this.actorsService.findById(id), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }

    @Public()
    @Put('/:id')
    @UseInterceptors(FileInterceptor('image', { storage: storageConfig() }))
    async updateProduct(@Param('id') id: number, @Body() data: ActorDto, @UploadedFile() file: Multer.File, @Res() res: Response): Promise<ResponseType<Actor>> {
        try {
            const dataSend = {
                ...data,
                image: `/static/uploads/${file.filename}`,
            }
            return res.json(new ResponseData(await this.actorsService.update(id, dataSend), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            console.log(error)
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }

    @Public()
    @Delete('/:id')
    async deleteProduct(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Actor>> {
        try {
            return res.json(new ResponseData(await this.actorsService.delete(id), ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
}
