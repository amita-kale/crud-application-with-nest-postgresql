/* eslint-disable prettier/prettier */
import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookCatEntity } from './category/category_book/bookcat.entity';
import { BookCatModel } from './category/category_book/bookcat.model';
import { BookEntitys } from './models/book.entity';
import { Book } from './models/book.interface';
import { BookModel } from './models/book.model';
import { PatchBook } from './models/book.patch';
import {BookCat} from './category/category_book/bookcat.interface';
// import { BookModel } from './models/book.model';

@Injectable()
export class BookService {
    // bookCatRepository: any;
    // imagepath: string;
    constructor (
        @InjectRepository(BookEntitys)
        private readonly bookRepository: Repository<BookEntitys>,
        @InjectRepository(BookCatEntity)
        private readonly bookCatRepository: Repository<BookCatEntity>
    ) {}

    // addBook(bookModel: BookModel) {
    //     const newBook = this.bookRepository.create(bookModel);
    //     return this.bookRepository.save(newBook);
    //     // return from(this.bookRepository.save(book));
    // }

    // handleupload(@UploadedFile() image:Express.Multer.File){
    //     this.imagepath = image.path;
    //     console.log('image', image); 
    //     console.log('path',image.path);
        
    //     return "file upload API";
    //   }

    addBook(bookModel: BookModel): Observable<Book> {
        return from(this.bookRepository.save(bookModel));
        // return from(this.bookRepository.save(bookModel,bookModel.book_image=this.imagepath));
        // return from(this.bookRepository.save(bookModel.book_image=this.imagepath));

    }

    findAllBooks(): Observable<Book[]> {
        return from(this.bookRepository.find());
    }

    
    // getSpecificBookId(id:number): Observable<Book> {
    //     // return from(this.bookRepository.find(id));
    //     const book_id = id;
    //     return from(this.bookRepository.findOneBy({book_id}));
    //     // return from(this.bookRepository.find({book_id}));
    // }

    getSpecificBookName(name:string): Observable<Book> {
        const book_name = name;
        return from(this.bookRepository.findOneBy({book_name}));
    }

    getSpecificBookAuthor(author:string): Observable<Book> {
        // const author ;
        return from(this.bookRepository.findOneBy({author}));
    }

    // getSpecificBookImage(bimg:string): Observable<Book> {
    //     const book_image= bimg;
    //     return from(this.bookRepository.findOneBy({book_image}));
    // }

    getSpecificBookISBN(bisbn:string): Observable<Book> {
        const book_isbn= bisbn;
        return from(this.bookRepository.findOneBy({book_isbn}));
    }

    getSpecificBookPrice(book_price:number): Observable<Book> {
        const price:number = book_price;
            return from(this.bookRepository.findOneBy({price}));
    }

    updatePutBook(id: number, bookModel: BookModel): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,bookModel));
    }

    updatePatchBook(id: number, patchBook: PatchBook): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,patchBook));
    }

    deleteBook(id: number): Observable<DeleteResult> {
        return from(this.bookRepository.delete(id));
    }



    addBookCat(bookCatModel: BookCatModel): Observable<BookCatEntity> {
        return from(this.bookCatRepository.save(bookCatModel));
        // return from(this.bookRepository.save(bookCatModel));
}
}