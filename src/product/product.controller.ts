import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Products } from '../entites/products.entiteis';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  create(@Body() createUserDto: Product) {
    return this.productService.create(createUserDto);
  }
  @Get()
  getAll() {
    return this.productService.findAll();
  }
  @Patch()
  update(@Body() createUserDto: Product) {
    return this.productService.update(createUserDto);
  }
  @Delete()
  removeProduct(@Param('id') id: string) {
    return this.productService.remove(id);
  }
  /**
   * Initial requests , only saves in array
   */
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
