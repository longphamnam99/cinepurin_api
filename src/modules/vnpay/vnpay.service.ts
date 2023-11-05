import { Injectable, Inject } from '@nestjs/common';
import { IVnpayRepository } from 'src/interfaces/IVnpayRepository.interface';
import { Vnpay } from 'src/models/vnpay.model';

@Injectable()
export class VnpayService {
    constructor(
        @Inject('IVnpayRepository')
        private readonly vnpayRepository: IVnpayRepository
    ) {}

    async findAll(): Promise<Vnpay[]> {
        return await this.vnpayRepository.findAll();
    }
}