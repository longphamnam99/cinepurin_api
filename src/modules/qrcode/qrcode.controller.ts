import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/constant/decorator';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { ResponseType } from 'src/constant/type';
import { ResponseData } from 'src/services/response.service';
import * as qrCode from 'qrcode';

@Controller('qrcode')
export class QrcodeController {
    @Public()
    @Get()
    async getProducts(@Query("data") data: string, @Res() res: Response): Promise<ResponseType<any>> {
        try {
            const qrDataUrl = await qrCode.toDataURL(data);
            return res.json(new ResponseData(`<img src="${qrDataUrl}" alt="QR Code">`, ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            console.log(error)
            return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
}
