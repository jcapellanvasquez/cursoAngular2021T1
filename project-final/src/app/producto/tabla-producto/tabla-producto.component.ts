import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

  productos: Producto[] = []

  constructor(public productoService: ProductoService) {
    this.productoService.getProductos().subscribe( data => this.productos = data)
   }

  ngOnInit(): void {
  }

}
