import { Injectable, Inject } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { IProductRepository } from 'src/interfaces/IProductRepository.interface';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {
    constructor(
        @Inject('IProductRepository')
        private readonly productRepository: IProductRepository,
    ) { }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }

    async findById(id: number): Promise<Product> {
        return await this.productRepository.findById(id);
    }

    async create(product: ProductDto): Promise<Product> {
        return await this.productRepository.create(product);
    }

    async update(id: number, product: ProductDto): Promise<Product> {
        return await this.productRepository.update(id, product);
    }

    async delete(id: number): Promise<boolean> {
        return await this.productRepository.delete(id);
    }
}
