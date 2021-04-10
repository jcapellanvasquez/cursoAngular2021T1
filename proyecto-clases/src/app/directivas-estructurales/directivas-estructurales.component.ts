import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.css']
})
export class DirectivasEstructuralesComponent implements OnInit {

  mostrarContenido: boolean = false;
  listado = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(_ => {
      this.mostrarContenido = true;
    }, 3000)


    
    setTimeout(_ => {
      this.listado.push("item 6")

    }, 3000)
  }

}
