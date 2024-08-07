import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';  // Import your UserComponent

export const routes: Routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },  // Redirect to /user by default
    { path: 'user', component: UserComponent }  // Define the route for UserComponent
  
];
