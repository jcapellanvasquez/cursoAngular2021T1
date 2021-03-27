import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeptimaClaseService {
  public texto: string = "un texto en el servicio"

  constructor() { }
}
