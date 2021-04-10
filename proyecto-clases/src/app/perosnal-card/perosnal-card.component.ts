import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perosnal-card',
  templateUrl: './perosnal-card.component.html',
  styleUrls: ['./perosnal-card.component.css']
})
export class PerosnalCardComponent implements OnInit {
  nombre: string = "Julio";
  apellido: string = "Capellan";


  constructor() { }


  ngOnInit(): void {
  }

}
