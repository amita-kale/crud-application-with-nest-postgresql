
import { IsDefined, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('feed_post')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column()
  @IsString()
  @IsDefined()
  name: string;
  @Column()
  email: string;
  @Column()
  gender: string;
  @Column()
  address: string;
  @Column()
  mobile_number: number;
  // @Column()
  // filename: string;
  // @Column({
  //   type: 'bytea',
  // })
  // data: Uint8Array;
}












