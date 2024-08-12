import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'forms';
}
