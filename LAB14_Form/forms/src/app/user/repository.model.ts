//repository.model.ts file is used to set up all elements
import { User } from "./user.model";
import { Datasource } from "./datasource.model"

export class User_repository{
    private datasource:Datasource
    private users : User[] 

    constructor(){
        this.datasource = new Datasource()
        this.users = new Array<User>()
        this.datasource.getuser().forEach(u => this.users.push(u)); 
    }

    getuser():User[]{
        return this.users
    }
    getuserID(id:number):any{
        return this.users.find(u=>u.id == id)
    }
    adduser(user:User){
        this.users.push(user)
    }
}