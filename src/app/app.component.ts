import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule], // alternatively, individual components can be imported
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCoffee = faCoffee;
}