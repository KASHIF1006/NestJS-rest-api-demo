import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BookService} from './book.service'
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {

    constructor(private bookService : BookService){

    }

    @Get("/get_all_books")
    getAllBooks() : Book[] {
        return this.bookService.getAllBooks();
    }

    @Post("/add_book")
    addBook(@Body() book: Book) : string {
        return this.bookService.addBookService(book)
    }
    
    @Put('/update_book')
    updateBook(@Body() book : Book) : string {
        return this.bookService.updateBookService(book);
    }

    @Delete('/delete_book/:id')
    deleteBook(@Param('id') bookId : string) : string {
        return this.bookService.deleteBookService(bookId)
    }
}