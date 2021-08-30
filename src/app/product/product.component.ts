import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  imageData = [
    {
      image: 'assets/images/01.jpg',
      thumbnail: 'assets/images/min01.jpg',
    },
    {
      image: 'assets/images/02.jpg',
      thumbnail: 'assets/images/min02.jpg',
    },
    {
      image: 'assets/images/03.jpg',
      thumbnail: 'assets/images/min03.jpg',
    },
    {
      image: 'assets/images/04.jpg',
      thumbnail: 'assets/images/min04.jpg',
    },
    {
      image: 'assets/images/05.jpg',
      thumbnail: 'assets/images/min05.jpg',
    },
    {
      image: 'assets/images/06.jpg',
      thumbnail: 'assets/images/min06.jpg',
    },
    {
      image: 'assets/images/07.jpg',
      thumbnail: 'assets/images/min07.jpg',
    },
    {
      image: 'assets/images/08.jpg',
      thumbnail: 'assets/images/min08.jpg',
    },
    {
      image: 'assets/images/09.jpg',
      thumbnail: 'assets/images/min09.jpg',
    },
    {
      image: 'assets/images/10.jpg',
      thumbnail: 'assets/images/min10.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
