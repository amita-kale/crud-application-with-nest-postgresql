import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book_details')
export class BookEntity {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column({ default: '' })
  book_name: string;

  @Column()
  author: string;

  @Column()
  price: number;

  // @Column()
  // book_image: string;

  @Column()
  book_isbn: string;
}
