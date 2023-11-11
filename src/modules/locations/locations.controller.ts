import { Controller, Get, Res } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Public } from 'src/constant/decorator';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ServerMessage, ServerStatus } from 'src/constant/enum';

@Controller('locations')
export class LocationsController {
    // constructor(private readonly locationsService: LocationsService) { }

    @Public()
    @Get()
    async getProducts(@Res() res: Response) {
        return "abc"
        // try {
        //   return res.json(new ResponseData(await this.locationsService.findAll(), ServerStatus.OK, ServerMessage.OK));
        // } catch (error) {
        //   return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        // }
    }
}
