import {Component, OnInit} from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PeliculaModel} from '../../model/pelicula.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscar = '';
  listaPeliculasBuscadas: PeliculaModel [] = [];
  cargando = false;

  constructor(private peliculasServide: PeliculasService, private router: ActivatedRoute, private route: Router) {
    this.router.params.subscribe(params => {
      if (params.id) {
        this.buscar = params.id;
        this.buscarPelicula();
      }
    });
  }

  buscarPelicula() {
    this.cargando = true;
    this.listaPeliculasBuscadas = [];
    if (this.buscar.length === 0) {
      return;
    }
    this.peliculasServide.queryFilms(this.buscar).subscribe((data) => {
      for (const film of data.results) {
        this.peliculasServide.anhadirFilmToList(film, this.listaPeliculasBuscadas);
      }
    });
    this.cargando = false;
  }

  ngOnInit() {
  }

  ir(id: number) {
    this.route.navigate(['pelicula', id]);
  }
}
