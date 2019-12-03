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
  {path: 'home', component: HomeComponent, canActivate: []},
  {path: 'pelicula/:id', component: PeliculaComponent, canActivate: []},
  {path: 'localizar/:id', component: LocalizarComponent, canActivate: []},
  {path: 'buscar/:id', component: BuscarComponent, canActivate: []},
  {path: 'buscar', component: BuscarComponent, canActivate: []},
  {path: 'callback', component: CallbackComponent},
  {path: 'noAuth', component: NoAuthComponent},
  {path: '**', component: HomeComponent, canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
