import { Component } from '@angular/core';
import {AuthService} from './services/angular-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCine';

  constructor(private auth: AuthService){}
}
