import { Component, OnInit } from '@angular/core';
import {AngularAuthService} from '../../services/angular-auth.service';
import {NgForm} from '@angular/forms';
import {PeliculaModel} from '../../model/pelicula.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private aas: AngularAuthService) { }

  ngOnInit() {
  }

  registrarse(form: NgForm) {
    this.aas.registerUser('', '');
  }
}
