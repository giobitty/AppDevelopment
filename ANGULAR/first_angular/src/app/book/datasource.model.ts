// model for the datasource that will have the list of all the books we have
import { Book } from "./book.model";

export class Datasource{
    //the array of the books
    private books: Book[]
    constructor(){
        this.books = new Array<Book>(
            new Book(1,'The parable of the sawyer','Octavia Butler',36.99),
            new Book(2,'General Science',"Faulkner, Oard", 110),
            new Book(3,'On that bench','G. B',8.99)
        )
    }
    getBooks(){
        return this.books
    }
}