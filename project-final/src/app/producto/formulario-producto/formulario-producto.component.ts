import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, public productoService: ProductoService) {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: [''],
      descripcion: [''],
      precio: [''],
      estatus: [false],
    });
   }

  ngOnInit(): void {
    this.productoService.getTODOS()
  }

  public salvar() {
    console.log(this.form.value)
    let producto: Producto = this.form.value;
    this.productoService.crearProducto(producto);
  }

}
