import { Controller, Post, Get, Query, Res, Req } from '@nestjs/common';
import { Public } from 'src/constant/decorator';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { VnpayService } from './vnpay.service';
import { Request, Response } from 'express';
import * as moment from 'moment-timezone';
import axios from 'axios';

@Controller('vnpay')
export class VnpayController {
    // constructor(private readonly vnpayService: VnpayService) {}

    sortObject(obj: object) {
        let sorted = {};
        let str = [];
        let key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                str.push(encodeURIComponent(key));
            }
        }
        str.sort();
        for (key = 0; key < str.length; key++) {
            sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
        }
        return sorted;
    }

    @Public()
    @Post()
    createUrl(@Req() req: Request, @Res() res: Response) {
        const config = {
            "vnp_TmnCode": "M6VTR8B5",
            "vnp_HashSecret": "FSVLTSBHYBOYTNVOVIWSLLSMNMTSEWFF",
            "vnp_Url": "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
            "vnp_Api": "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction",
            "vnp_ReturnUrl": "http://45.117.177.116/",
            "vnp_BankCode": undefined
        }

        const bank = {
            "VNBANK": "VNBANK",
            "INTCARD": "INTCARD"
        }

        const lang = {
            "vn": "vn",
            "en": "en"
        }


        let date = new Date();
        let createDate = moment(date).tz('Asia/Ho_Chi_Minh').format('YYYYMMDDHHmmss');
        let ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress
        let orderId = moment(date).format('DDHHmmss');
        let amount = req.body.amount;
        let bankCode = req.body.bankCode;
        let locale = req.body.language;

        let vnp_ReturnUrl = req.body.url;

        if (locale === null || locale === '') {
            locale = lang.vn;
        }

        if (bankCode === null || bankCode === '') {
            config.vnp_BankCode = bankCode;
        }

        let currCode = 'VND';
        let vnp_Params = {};

        vnp_Params['vnp_Version'] = '2.1.0';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = config.vnp_TmnCode;
        vnp_Params['vnp_Locale'] = locale;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
        vnp_Params['vnp_OrderType'] = 'other';
        vnp_Params['vnp_Amount'] = amount * 100;
        vnp_Params['vnp_ReturnUrl'] = vnp_ReturnUrl || config.vnp_ReturnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;

        if (bankCode !== null && bankCode !== '') {
            vnp_Params['vnp_BankCode'] = bankCode;
        }

        vnp_Params = this.sortObject(vnp_Params);

        let querystring = require('qs');
        let signData = querystring.stringify(vnp_Params, { encode: false });
        let crypto = require("crypto");
        let hmac = crypto.createHmac("sha512", config.vnp_HashSecret);
        let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
        vnp_Params['vnp_SecureHash'] = signed;
        config.vnp_Url += '?' + querystring.stringify(vnp_Params, { encode: false });

        try {
            return res.json(new ResponseData(config.vnp_Url, ServerStatus.OK, ServerMessage.OK));
        } catch (error) {
            return res.json(new ResponseData(error, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
    
    @Public()
    @Post("/check")
    async checkPayment(@Req() req: Request, @Res() res: Response) {
        const config = {
            "vnp_TmnCode": "M6VTR8B5",
            "vnp_HashSecret": "FSVLTSBHYBOYTNVOVIWSLLSMNMTSEWFF",
            "vnp_Url": "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
            "vnp_Api": "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction",
            "vnp_ReturnUrl": "http://45.117.177.116/",
            "vnp_BankCode": undefined
        }

        let date = new Date();
        let createDate = moment(date).tz('Asia/Ho_Chi_Minh').format('YYYYMMDDHHmmss');

        let crypto = require("crypto");

        let vnp_TmnCode = config.vnp_TmnCode;
        let secretKey = config.vnp_HashSecret;
        let vnp_Api = config.vnp_Api;

        let vnp_TxnRef = req.body.orderId;
        let vnp_TransactionDate = req.body.transDate;
        let vnp_RequestId = moment(date).format('HHmmss');
        let vnp_Version = '2.1.0';
        let vnp_Command = 'querydr';
        let vnp_OrderInfo = 'Truy van GD ma:' + vnp_TxnRef;

        let vnp_IpAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress

        let currCode = 'VND';
        let vnp_CreateDate = moment(date).format('YYYYMMDDHHmmss');
        let data = vnp_RequestId + "|" + vnp_Version + "|" + vnp_Command + "|" + vnp_TmnCode + "|" + vnp_TxnRef + "|" + vnp_TransactionDate + "|" + vnp_CreateDate + "|" + vnp_IpAddr + "|" + vnp_OrderInfo;
        let hmac = crypto.createHmac("sha512", secretKey);
        let vnp_SecureHash = hmac.update(new Buffer(data, 'utf-8')).digest("hex");

        let dataObj = {
            'vnp_RequestId': vnp_RequestId,
            'vnp_Version': vnp_Version,
            'vnp_Command': vnp_Command,
            'vnp_TmnCode': vnp_TmnCode,
            'vnp_TxnRef': vnp_TxnRef,
            'vnp_OrderInfo': vnp_OrderInfo,
            'vnp_TransactionDate': vnp_TransactionDate,
            'vnp_CreateDate': vnp_CreateDate,
            'vnp_IpAddr': vnp_IpAddr,
            'vnp_SecureHash': vnp_SecureHash
        };

        try {
            const response = await axios.post(vnp_Api, dataObj);

            if (response.data.vnp_ResponseCode == "00") {
                return res.json(new ResponseData("Payment success", ServerStatus.OK, ServerMessage.OK));
            } else {
                return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
            }
        } catch (error) {
            return res.json(new ResponseData(error, ServerStatus.ERROR, ServerMessage.ERROR));
        }
    }
}
