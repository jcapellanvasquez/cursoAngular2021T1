import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public nombre: string= "";
  public listadoNombres = [];
  constructor() { }

  ngOnInit(): void {
  }

  public agregarNombre() {
    this.listadoNombres.push(this.nombre);
    this.nombre = "";
    
  }

  public borrarNombre(nom: string) {
    console.log(nom)
    this.listadoNombres = this.listadoNombres.filter( n => nom !== n)
  }
}
