import { Injectable } from '@angular/core';

// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// https://alligator.io/angular/firebase-authentication-angularfire2/
export class AngularAuthService {
  user: Observable<firebase.User>;


  constructor(private afsAuth: AngularFireAuth) {
    this.user = afsAuth.authState;
  }

  registerUser(email: string, password: string) {
    this.afsAuth
      .auth
      .createUserWithEmailAndPassword(email, password).then( value => {
        console.log('¡Registrado!', value);
    })
      .catch(err => {
        console.log('Algo salio mal:', err);
      });
  }

  login(email: string, password: string) {
    this.afsAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('¡Bienvenido!');
      })
      .catch(err => {
        console.log('ERROR, algo ha ocurrido:', err.message);
      });
  }

  logout() {
    this.afsAuth
      .auth
      .signOut(). then(value => {
        console.log('Te has deslogueado.');
    }).catch(err => {
      console.log('Ha ocurrido un error: ', err);
    });
  }
}
