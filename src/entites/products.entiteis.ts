import { ObjectIdColumn, Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
@Entity()
export class Products {
  @ObjectIdColumn({ select: false })
  _id: string;
  @Column()
  productId!: string;
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
