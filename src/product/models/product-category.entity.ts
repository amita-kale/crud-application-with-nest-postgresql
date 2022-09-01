import { ProductPostEntity } from 'src/product/models/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('product_category1')
export class ProductPostCategory {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column({default:''})
  // productSpecification:string;
  @Column({default:''})
  size:string;

  @ManyToMany(
    () => ProductPostEntity,
    (productEntity) => productEntity.productCategory,
  )
  //@JoinTable()
  productEntity: ProductPostEntity;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}