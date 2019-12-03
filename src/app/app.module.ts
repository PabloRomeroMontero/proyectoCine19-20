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
import {environment} from '../environments/environment';

// Firebase
import {HttpClientModule} from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';



// Servicios
import { AuthService} from './services/angular-auth.service';
import {PeliculasService} from './services/peliculas.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CallbackComponent } from './components/callback/callback.component';
import {AutenticadoService} from './services/autenticado.service';
import { NoAuthComponent } from './no-auth/no-auth.component';
import {AgmCoreModule} from '@agm/core';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    LocalizarComponent,
    BuscarComponent,
    HeaderComponent,
    CallbackComponent,
    NoAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDbB-cciES0z4gFI37ZeY0uWp5Qc57cDCI'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, PeliculasService, AutenticadoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// AIzaSyAW6NbTFA1PLAarYk_oCmIgg3i7mcuoaKU
