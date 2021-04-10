import { Component, OnInit } from '@angular/core';
import { SeptimaClaseService } from '../septima-clase.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(public servicio: SeptimaClaseService) { }

  ngOnInit(): void {
  }

}
