import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';

@Component({
  selector: 'app-quinta-clase',
  templateUrl: './quinta-clase.component.html',
  styleUrls: ['./quinta-clase.component.css']
})
export class QuintaClaseComponent implements OnInit, AfterContentInit {
  public list: any[] = [
    {name: "juan", marks: 20, amount: 20.34, date: new Date(), bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
    {name: "Pedro", marks: 18, amount: 15.24,date: new Date(), bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
    {name: "Lucas", marks: 32, amount: 543.764,date: new Date(), bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
    {name: "Antonio", marks: 34, amount: 10.34,date: new Date(), bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
    {name: "Cristina", marks: 43, amount:50.65,date: new Date(), bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
  ];

  @ViewChild('searchBox')
  public searchBox: SearchBoxComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    setTimeout(()=> console.log(this.searchBox.getQuery()),0)
  }

  public searchHandler(query: string) {
    this.list = this.list.filter( item => item.name === query )
  }

}
