import {Injectable} from '@angular/core';
import {PeliculaModel} from '../model/pelicula.model';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas: any[];
  constructor(protected http: HttpClient) {

  }


  public getAllFilmsToApi() {
     this.http.get('https://api.themoviedb.org/3/movie/550?api_key=c5509d69e528a48a6cef84bf1ae9309e').subscribe((data) => {
       this.peliculas = data['results'];
     },
       // tslint:disable-next-line:no-shadowed-variable
       (error) =>  {
       console.error(error);
       });
  }


  // https://blog.ng-classroom.com/blog/angular/rest-api-with-angular/
  // https://stackblitz.com/github/ng-classroom/demo131?file=src%2Fapp%2Fuser.service.ts

  // ngOnInit() {
  //   this.userService.getUsers()
  //     .subscribe(
  //       (data) => { // Success
  //         this.users = data['results'];
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );

}
