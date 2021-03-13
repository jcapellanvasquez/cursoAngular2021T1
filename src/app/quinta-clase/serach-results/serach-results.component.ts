import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serach-results',
  template: `
    <div class="row">
      <div class="col-10">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of list; index as i">
            <th scope="row">{{ i + 1}}</th>
            <td>{{item.name}}</td>
            <td>{{item.marks}}</td>
          </tr>
      </table>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SerachResultsComponent implements OnInit {

  @Input()
  public list: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
