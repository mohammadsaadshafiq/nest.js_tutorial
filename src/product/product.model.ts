import { title } from 'process';
import { ObjectID } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';
import { isString } from 'util';
export class Product {
  public id: string;
  @ApiProperty({ type: String, description: 'title' })
  public title: string;
  @ApiProperty({ type: String, description: 'Description  of the product' })
  public description: string;
  @ApiProperty({ type: Number, description: 'Price' })
  public price: number;
}
