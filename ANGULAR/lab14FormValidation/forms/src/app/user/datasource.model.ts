// datasource.model.ts
import { User } from './user.model';

export class Datasource {
  private users: User[] = [
    new User(1, 'Alice', 'alice@example.com'),
    new User(2, 'Bob', 'bob@example.com')
  ];

  getuser(): User[] {
    return this.users;
  }
}
