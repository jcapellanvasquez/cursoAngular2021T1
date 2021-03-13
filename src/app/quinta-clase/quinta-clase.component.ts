import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quinta-clase',
  templateUrl: './quinta-clase.component.html',
  styleUrls: ['./quinta-clase.component.css']
})
export class QuintaClaseComponent implements OnInit {
  public list: any[] = [
    {name: "Juan", marks: 20},
    {name: "Pedro", marks: 18},
    {name: "Lucas", marks: 32},
    {name: "Antonio", marks: 34},
    {name: "Cristina", marks: 43},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public searchHandler(query: string) {
    this.list = this.list.filter( item => item.name === query )
  }

}
