import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: string;
}
