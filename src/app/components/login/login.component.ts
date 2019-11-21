import { Component, OnInit } from '@angular/core';
import {AngularAuthService} from '../../services/angular-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(aas: AngularAuthService) { }

  ngOnInit() {
  }

}
