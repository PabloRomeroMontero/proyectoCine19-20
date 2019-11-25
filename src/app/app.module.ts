import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// components
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import {LocalizarComponent} from './components/localizar/localizar.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {environment} from '../environments/environment';
import {SignupComponent} from './components/signup/signup.component';

// Firebase
import {HttpClientModule} from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

// Servicios
import {AngularAuthService} from './services/angular-auth.service';
import {PeliculasService} from './services/peliculas.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    LoginComponent,
    LocalizarComponent,
    BuscarComponent,
    HeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularAuthService, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
