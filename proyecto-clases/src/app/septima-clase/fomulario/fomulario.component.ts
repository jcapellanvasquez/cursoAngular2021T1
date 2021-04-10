import { Component, OnInit } from '@angular/core';
import { SeptimaClaseService } from '../septima-clase.service';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  constructor(public servicio: SeptimaClaseService) { }

  ngOnInit(): void {
  }

}
