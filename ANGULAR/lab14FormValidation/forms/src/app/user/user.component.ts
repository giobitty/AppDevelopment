import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User_repository } from './repository.model';
import { User } from './user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  model:User_repository=new User_repository()
  newuser: User = new User();

  //convert js in json file
  get jsonUser(){
    return JSON.stringify(this.newuser)
  }

  adduser(u:User){
    console.log('New user is '+ this.jsonUser)
  }

  displaylog(model:any){
    console.log("New user model " ,model)
  }
}
