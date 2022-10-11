import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    const genratedId = this.productService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return { id: genratedId };
  }
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getProduct(prodId);
  }
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Patch(':id')
  updateProducts(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    const updatedProduct = this.productService.updateProduct(
      prodId,
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return updatedProduct;
  }
  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productService.removeProduct(prodId);
    return null;
  }
}
