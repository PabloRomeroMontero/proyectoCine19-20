import {Component, OnInit} from '@angular/core';
import {AngularAuthService} from '../../services/angular-auth.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  user: string;
  constructor(aas: AngularAuthService) {

  }

  ngOnInit() {
  }

  iniciarSesion(form: NgForm){

  }

}
