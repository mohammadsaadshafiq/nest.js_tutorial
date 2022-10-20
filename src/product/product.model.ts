import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';
export class Product {
  productId: string; // index this id
  @ApiProperty({ type: String, description: 'title' })
  @IsNotEmpty()
  public title: string;
  @ApiProperty({ type: String, description: 'Description  of the product' })
  public description: string;
  @ApiProperty({ type: Number, description: 'Price' })
  @IsNumberString()
  public price: number;
}
