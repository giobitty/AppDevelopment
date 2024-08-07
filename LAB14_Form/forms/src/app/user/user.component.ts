import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user.model';
import { User_repository } from './repository.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  model:User_repository=new User_repository()
  newuser: User = new User();

  get jsonUser(){
    return JSON.stringify(this.newuser)
  }
  addusesr(u:User){
    console.log('New user is '+ this.jsonUser)
  }

  displaylog(model:any){
    console.log(model)
  }
}
