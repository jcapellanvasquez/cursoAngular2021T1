import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Producto } from './modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private collectionProductos: AngularFirestoreCollection<Producto>;

  constructor(public firestore: AngularFirestore, public httpClient: HttpClient) {
    this.collectionProductos = this.firestore.collection<Producto>('productos')
  }

  public getProductos(): Observable<Producto[]> {
    return this.collectionProductos.valueChanges()
  }

  public crearProducto(producto: Producto) {
    this.collectionProductos.add(producto)
  }

  public actualizarProducto(producto: Producto) {
    this.collectionProductos.doc().update(producto)
  }



  /**
   * Este metodo sirve de ejemplo para ver como seria la llamada a un API
   * Utilizando URL o EndPoint del APIRest
   */
  public getTODOS() {
    this.httpClient.get(environment.apiURL + "/todos")
    .pipe(
      map((todos: any) => todos[0]), // Ejemplo de como user los operadores en RXJS
      catchError((error: any) => { // Ejemplo de manejo de errores
        console.log(error)
        return of("error") // Este operador crea un observable
      })
    ).subscribe(todos => console.log(todos));
  }

}
