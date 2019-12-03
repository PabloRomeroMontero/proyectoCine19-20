import {Injectable} from '@angular/core';
import {PeliculaModel} from '../model/pelicula.model';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculasPopulares: PeliculaModel[] = [];
  peliculas: PeliculaModel[] = [];
  peliculasParaNinos: PeliculaModel[] = [];
  cadena: string;
  peliculasCartelera: PeliculaModel[] = [];

  constructor(protected http: HttpClient) {
    this.getPopularFilms();
    this.getPopularFilmsToChild();
    this.getFilmsTheatre();
    this.getAllFilmsToApi();
  }

  public getPopularFilms() {
    // tslint:disable-next-line:label-position no-unused-expression
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c5509d69e528a48a6cef84bf1ae9309e').subscribe(
      (data) => {
        // @ts-ignore
        for (const film of data.results) {
          if (this.peliculasPopulares.length < 5) {
            this.anhadirFilmToList(film, this.peliculasPopulares);
          }
        }
      });
  }


  public getAllFilmsToApi() {
    for (const pelis of this.peliculasParaNinos) {
      this.peliculas.push(pelis);
    }
    for (const pelis of this.peliculasPopulares) {
      this.peliculas.push(pelis);
    }
    for (const pelis of this.peliculasCartelera) {
      this.peliculas.push(pelis);
    }
  }

  public getPopularFilmsToChild() {
    let count = 0;
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=c5509d69e528a48a6cef84bf1ae9309e&language=es-ES&' +
      'sort_by=popularity.desc&page=1&with_genres=16').subscribe(
      (data) => {
        // @ts-ignore
        for (const film of data.results) {
          count++;
          if (this.peliculasParaNinos.length < 5 && count > 5) {
            this.anhadirFilmToList(film, this.peliculasParaNinos);
          }
        }
      });
  }

  private anhadirFilmToList(film, peliculaList: PeliculaModel[]) {
    peliculaList.push(this.extractedFilm(film));
  }

  extractedFilm(film): PeliculaModel {
    const peliculaIntroducir: PeliculaModel = new PeliculaModel();
    peliculaIntroducir.id = film.id;
    peliculaIntroducir.categoria = film.genre_ids;
    peliculaIntroducir.sinopsis = film.overview;
    peliculaIntroducir.img = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + film.poster_path;
    peliculaIntroducir.popularidad = film.popularity;
    peliculaIntroducir.titulo = film.title;
    peliculaIntroducir.votoPromedio = film.vote_average;
    peliculaIntroducir.fraseCelebre = film.overview.substr(0, 40);

    return peliculaIntroducir;
  }

  public getFilmsTheatre() {
    let count = 0;
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c5509d69e528a48a6cef84bf1ae9309e').subscribe(
      (data) => {
        // @ts-ignore
        for (const film of data.results) {
          count++;
          if (this.peliculasCartelera.length < 5 && count > 5) {
            this.anhadirFilmToList(film, this.peliculasCartelera);
          }
        }
      });
  }

  public queryFilm(id: string): any {
    // tslint:disable-next-line:no-unused-expression label-position
    return this.http.get('\n' +
      'https://api.themoviedb.org/3/movie/' + id + '?api_key=c5509d69e528a48a6cef84bf1ae9309e&language=es-ES');
  }


  public queryFilms(cadena: string): PeliculaModel [] {
    return null;
  }
}
