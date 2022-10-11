import { Controller, Post, Body } from '@nestjs/common';
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
}
