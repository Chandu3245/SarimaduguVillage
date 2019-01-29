import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrlArray: any[];
  constructor() { }

  ngOnInit() {
    this.imageUrlArray = [
      "../assets/img/1.jpg",
      "../assets/img/2.jpg",
      "../assets/img/3.jpg",
    ];
  }

}
