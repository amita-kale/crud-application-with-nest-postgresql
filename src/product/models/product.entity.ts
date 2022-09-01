import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ProductData {
  AVAILABLE = 'Available',
  OUTOFSTOCK = 'OutOfStock',
}
export enum ProductSize {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L',
  EXTRALARGE = 'XL',
}
@Entity('product_post')
export class ProductPostEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({ default: '' })
  productName: string;

  @Column({ type: 'bigint'})
  price: number;

  @Column({ type: 'enum', enum: ProductData, default: null })
  stock: ProductData;

  // @Column({ type: 'enum', enum: ProductSize, default: null })
  // size: ProductSize;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
    productCategory: any;
}
