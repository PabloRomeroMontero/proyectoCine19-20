import {Component, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import {LocalizarComponent} from './components/localizar/localizar.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {CallbackComponent} from './components/callback/callback.component';
import {NoAuthComponent} from './no-auth/no-auth.component';
import {AutenticadoService} from './services/autenticado.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AutenticadoService]},
  {path: 'pelicula/:id', component: PeliculaComponent, canActivate: [AutenticadoService]},
  {path: 'localizar/:id', component: LocalizarComponent, canActivate: [AutenticadoService]},
  {path: 'buscar/:id', component: BuscarComponent, canActivate: [AutenticadoService]},
  {path: 'buscar', component: BuscarComponent, canActivate: [AutenticadoService]},
  {path: 'callback', component: CallbackComponent},
  {path: 'noAuth', component: NoAuthComponent},
  {path: '**', component: HomeComponent, canActivate: [AutenticadoService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
