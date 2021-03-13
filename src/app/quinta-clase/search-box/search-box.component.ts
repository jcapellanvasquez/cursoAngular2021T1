import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
    <div class="row">
      <div class="col-8">
        <input type="text" 
          placeholder="Buscar..." 
          [(ngModel)]="query"
          name="query"
          class="form-control"
          >
      </div> 
      <div class="col-2">
        <button class="btn  btn-light"
          (click)="buscar()"
        >Buscar</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {
  public query: string = "";

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  public buscar() {
    this.onSearch.emit(this.query);
  }
}
