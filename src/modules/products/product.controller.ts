import { Controller, Get, Post, Put, Delete, Res, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { Product } from '../../models/product.model';
import { ProductDto } from 'src/dto/product.dto';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { Public } from 'src/constant/decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer'; 
import { storageConfig } from 'helpers/config';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Public()
  @Get()
  async getProducts(@Res() res: Response): Promise<ResponseType<Product>> {
    try {
      return res.json(new ResponseData(await this.productService.findAll(), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {storage: storageConfig()}))
  async createProduct(@Body() product: ProductDto, @UploadedFile() file: Multer.File, @Res() res: Response): Promise<ResponseType<Product>> {
    const dataSend = {
      ...product,
      image: `/static/uploads/${file.filename}`,
      category: JSON.stringify(product.category),
      actor: JSON.stringify(product.actor),
      director: JSON.stringify(product.actor),
    }
    console.log(dataSend)
    try {
      return res.json(new ResponseData(await this.productService.create(dataSend), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      console.log(error)
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Public()
  @Get('/:id')
  async detailProduct(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Product>> {
    try {
      return res.json(new ResponseData(await this.productService.findById(id), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Public()
  @Put('/:id')
  async updateProduct(@Param('id') id: number, @Body() product: ProductDto, @Res() res: Response): Promise<ResponseType<Product>> {
    try {
      return res.json(new ResponseData(await this.productService.update(id, product), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Public()
  @Delete('/:id')
  async deleteProduct(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Product>> {
    try {
      return res.json(new ResponseData(await this.productService.delete(id), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }
}