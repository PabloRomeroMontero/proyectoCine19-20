import {Component, OnInit} from '@angular/core';
import {PeliculaModel} from '../../model/pelicula.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: PeliculaModel = new PeliculaModel();

  constructor(public router: ActivatedRoute,
              private servicioPelicula: PeliculasService,
              private route: Router) {



    this.router.params.subscribe(params => {
      this.servicioPelicula.queryFilm(params.id).subscribe(
        (data) => {
          this.pelicula = this.servicioPelicula.extractedFilm(data);
        });
      console.log(this.pelicula);
    });
  }

  ngOnInit() {

  }
  regresar() {
    this.route.navigate(['home']);
  }
  localizar(titulo: string) {
    this.route.navigate(['localizar', titulo]);
  }

  isEmpty(sinopsis: string): boolean {
    // tslint:disable-next-line:triple-equals
    if (sinopsis == '') {
      return true;
    } else {
      return false;
    }
  }
}
