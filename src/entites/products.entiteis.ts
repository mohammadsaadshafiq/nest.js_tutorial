import {
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  Column,
  Entity,
  ObjectID,
} from 'typeorm';
import {} from 'typeorm';
@Entity()
export class Products {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
