import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { ApiBody, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { type } from 'os';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  @ApiCreatedResponse({ description: 'Create new product' })
  @ApiBody({ type: Product })
  create(@Body() createUserDto: Product) {
    return this.productService.create(createUserDto);
  }
  @Get()
  @ApiOkResponse({ description: 'All Products' })
  getAll() {
    return this.productService.findAll();
  }
  @Put(':id')
  @ApiBody({ type: Product })
  @ApiCreatedResponse({ description: 'Update Product' })
  update(@Param('id') id: string, @Body() updatedProduct: Product) {
    return this.productService.update(id, updatedProduct);
  }
  @Delete(':id')
  @ApiOkResponse({ description: 'Product Removed' })
  removeProduct(@Param('id') id: string) {
    return this.productService.remove(id);
  }
  @Get(':id')
  @ApiOkResponse({ description: 'Product' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  /**
   * Initial requests , only saves in array
   */
  // @Post()
  // addProduct(
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDescription: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   const genratedId = this.productService.insertProduct(
  //     prodTitle,
  //     prodDescription,
  //     prodPrice,
  //   );
  //   return { id: genratedId };
  // }
  // @Get(':id')
  // getProduct(@Param('id') prodId: string) {
  //   return this.productService.getProduct(prodId);
  // }
  // @Get()
  // getAllProducts() {
  //   return this.productService.getAllProducts();
  // }
  // @Patch(':id')
  // updateProducts(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDescription: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   const updatedProduct = this.productService.updateProduct(
  //     prodId,
  //     prodTitle,
  //     prodDescription,
  //     prodPrice,
  //   );
  //   return updatedProduct;
  // }
  // @Delete(':id')
  // deleteProduct(@Param('id') prodId: string) {
  //   this.productService.removeProduct(prodId);
  //   return null;
  // }
}
