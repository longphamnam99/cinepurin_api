import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CategoryModule } from './modules/categories/category.module';
import { SlideshowModule } from './modules/slideshow/slideshow.module';
import { VnpayModule } from './modules/vnpay/vnpay.module';

import { CarModule } from './modules/cars/car.module';
import { AuthModule } from './modules/auth/auth.module';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constant/constant';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { RolesGuard } from './modules/auth/roles.guard';
import { VnpayController } from './modules/vnpay/vnpay.controller';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ActorsModule } from './modules/actors/actors.module';
import { DirectorsModule } from './modules/directors/directors.module';
import { LocationsController } from './modules/locations/locations.controller';
import { LocationsModule } from './modules/locations/locations.module';
import { QrcodeModule } from './modules/qrcode/qrcode.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 900000 },
    }),
    ProductModule,
    CategoryModule,
    CarModule,
    AuthModule,
    SlideshowModule,
    VnpayModule,
    OrdersModule,
    PaymentsModule,
    ActorsModule,
    DirectorsModule,
    LocationsModule,
    QrcodeModule,
  ],
  controllers: [AppController, VnpayController, LocationsController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {

  }
}
