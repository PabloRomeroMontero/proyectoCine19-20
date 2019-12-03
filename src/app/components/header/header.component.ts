import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/angular-auth.service';
import {PeliculasService} from '../../services/peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  peliculaABuscar = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  buscar() {
    this.router.navigate(['buscar', this.peliculaABuscar]);
  }

}
