import {Component, OnInit} from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {PeliculaModel} from '../../model/pelicula.model';
import {from} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculasPopulares: PeliculaModel[] = [];
  peliculasParaLosMasPeques: PeliculaModel[] = [];
  peliculasAlgeciras: PeliculaModel[] = [];

  constructor(private peliculas: PeliculasService, private router: Router) {
  }

  ngOnInit() {
    this.peliculasPopulares = this.peliculas.peliculasPopulares;
    this.peliculasParaLosMasPeques = this.peliculas.peliculasParaNinos;
    this.peliculasAlgeciras = this.peliculas.peliculasCartelera;
    console.log(this.peliculasAlgeciras);
  }
  ir(id: number) {
    this.router.navigate(['/pelicula', id]);
  }
}
