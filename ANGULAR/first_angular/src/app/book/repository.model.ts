import { Datasource } from "./datasource.model";
import { Book } from "./book.model";

export class Bookrepository{
    private datasource:Datasource
    private books:Book[]
    constructor(){
        this.datasource = new Datasource()
        this.books = new Array<Book>()
        this.datasource.getBooks().forEach(b=>this.books.push(b))
    }
    getBooks(){
        return this.books
    }
    getBookId(id:number):any{
        this.books.find(b=>b.id == id)
    }
}