import { type } from 'os';
import { timestamp } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import {v4 as uuidv4} from 'uuid';

export enum ProductData{
   AVAILABLE= "Available",
   OUTOFSTOCK="OutOfStock"
}
export enum ProductSize{
    SMALL="S",
    MEDIUM="M",
    LARGE="L",
    EXTRALARGE="XL"
}
@Entity('product_post')


export class ProductPostEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({default:''})
  productName: string;

  @Column({type:'bigint',default:null})
  price:number;

  @Column({ type:'enum',enum:ProductData,default:null})
  stock:ProductData;

  @Column({ type:'enum',enum:ProductSize,default:null})
  size: ProductSize;

  @Column({ default: '' })
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}