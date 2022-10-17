import { Controller, Module } from '@nestjs/common';
import { Products } from 'src/entites/products.entiteis';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
