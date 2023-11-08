import { Injectable } from '@nestjs/common';
import { IProductRepository } from "src/interfaces/IProductRepository.interface";
import { BaseRepository } from 'src/interfaces/BaseRepository.interface';
import { ProductsEntity } from 'src/entities/products.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductRepository
    extends BaseRepository<ProductsEntity, Repository<ProductsEntity>>
    implements IProductRepository {

    constructor(
        @InjectRepository(ProductsEntity)
        protected readonly repository: Repository<ProductsEntity>) {
        super(repository);
    }
}