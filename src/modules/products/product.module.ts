import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from 'src/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      useClass: ProductRepository,
      provide: 'IProductRepository',
    }
  ],
})
export class ProductModule {}
