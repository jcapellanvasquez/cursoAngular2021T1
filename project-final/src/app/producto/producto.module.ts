import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TablaProductoComponent } from './tabla-producto/tabla-producto.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TablaProductoComponent, FormularioProductoComponent, ProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoModule { }
