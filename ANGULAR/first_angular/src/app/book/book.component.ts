import { Component } from '@angular/core';
import { Bookrepository } from './repository.model';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { Datasource } from './datasource.model';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  model:Bookrepository = new Bookrepository()
  get books(){
    return this.model.getBooks()
  }
}
