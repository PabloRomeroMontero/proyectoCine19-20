import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import {LocalizarComponent} from './components/localizar/localizar.component';
import {LoginComponent} from './components/login/login.component';
import {BuscarComponent} from './components/buscar/buscar.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: []},
  {path: 'pelicula/:id', component: PeliculaComponent, canActivate: []},
  {path: 'localizar/:id', component: LocalizarComponent, canActivate: []},
  {path: 'login', component: LoginComponent},
  {path: 'buscar/:id', component: BuscarComponent, canActivate: []},
  {path: 'buscar', component: BuscarComponent, canActivate: []},
  {path: '**', component: HomeComponent, canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
