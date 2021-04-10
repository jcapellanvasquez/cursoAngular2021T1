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
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Bio</th>
            </tr>
          </thead>
          <tbody  *ngIf="list.length > 0; else msg">
              <tr [ngClass]="item.amount < 20 ? 'text-danger text-bold' : ''" *ngFor="let item of list; index as i">
                <th scope="row">{{ i + 1}}</th>
                <td>{{item.name| titlecase}}</td>
                <td>{{item.marks}}</td>
                <td>{{item.amount | currency:'DOP':'symbol':'4.2-2'}}</td>
                <td>{{item.date | date:'d/MM/y'}}</td>
              </tr>
          </tbody>
          <ng-template #msg>
              <tbody>
                <tr> <td colspan="6">Listado vacio</td> </tr>
              </tbody>
            </ng-template>
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
