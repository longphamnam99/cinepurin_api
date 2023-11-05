import { Controller, Post, Get, Query, Res, Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Public } from 'src/constant/decorator';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { Request, Response } from 'express';
import * as moment from 'moment-timezone';
import axios from 'axios';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Public()
    @Post()
    createUrl(@Req() req: Request, @Res() res: Response) {
        try {
            const response = this.paymentsService.createUrl(req);
            return res.json(new ResponseData(response, ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(error, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
    
    @Public()
    @Post("/check")
    async checkPayment(@Req() req: Request, @Res() res: Response) {
        try {
            const response = await this.paymentsService.checkPayment(req)

            if (response) {
                return res.json(new ResponseData("Payment success", ServerStatus.OK, ServerMessage.OK));
            } else {
                return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
            }
        } catch (error) {
            return res.json(new ResponseData(error, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
}
