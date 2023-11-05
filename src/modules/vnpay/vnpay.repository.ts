import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VnpayEntity } from 'src/entities/vnpay.entity';
import { BaseRepository } from 'src/interfaces/BaseRepository.interface';
import { IVnpayRepository } from 'src/interfaces/IVnpayRepository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class VnpayRepository
    extends BaseRepository<VnpayEntity, Repository<VnpayEntity>>
    implements IVnpayRepository {
        
    constructor(
        @InjectRepository(VnpayEntity)
        protected readonly repository: Repository<VnpayEntity>) {
        super(repository);
    }
}
