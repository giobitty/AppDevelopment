import { Book } from "./book.model"

export class Datasource{
    //create array to store all books
    private books:Book[]

    constructor(){
        this.books = new Array<Book>(
            new Book(1,"The parable of the Sower", "Butler Octavia", 12),
            new Book(2,"General Science", "Faulkner/Oard", 12),
            new Book(3,"Blue Bird Fly", "Sunny Legend", 30),
        )
    }
    //methods
    getBook():Book[]{
        return this.books
    }
}