import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-localizar',
  templateUrl: './localizar.component.html',
  styleUrls: ['./localizar.component.css']
})
export class LocalizarComponent implements OnInit {
  title: string;
  loc = [[ 36.19739752560195, -5.353932588183625], [36.1640743280452, -5.4316951919433905], [36.130736958548496,-5.509457795703156]];


  constructor(private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        this.title = params.id;
      });
  }

}
