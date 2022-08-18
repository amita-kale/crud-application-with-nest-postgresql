import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookEntity } from './models/book.entity';
import { Book } from './models/book.interface';

@Injectable()
export class BookService {
    constructor (
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {}

    addBook(book: Book): Observable<Book> {
        return from(this.bookRepository.save(book));
    }

    findAllBooks(): Observable<Book[]> {
        return from(this.bookRepository.find());
    }

    
    getSpecificBookId(id:number): Observable<Book> {
        // return from(this.bookRepository.find(id));
        const book_id = id;
        return from(this.bookRepository.findOneBy({book_id}));
        // return from(this.bookRepository.find({book_id}));

    }

    getSpecificBookName(name:string): Observable<Book> {
        const book_name = name;
        // return from(this.bookRepository.findOneBy({book_name}));
        // return from(this.bookRepository.findBy({book_name}));
        return from(this.bookRepository.findOneBy({book_name}));

    }

    getSpecificBookPrice(book_price:number): Observable<Book> {
        const price:number = book_price;
            return from(this.bookRepository.findOneBy({price}));
        // return from(this.bookRepository.findOneBy({price}));
    }

    updatePutBook(id: number, book: Book): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,book));
    }

    updatePatchBook(id: number, book: Book): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,book));
    }

    deleteBook(id: number): Observable<DeleteResult> {
        return from(this.bookRepository.delete(id));
    }
}