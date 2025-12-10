import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  btw = 1.21;
  items = [
    { id: 1, name: 'Item 1', price: 50, status: 'pending'},
    { id: 2, name: 'Item 2', price: 100, status: 'approved'},
    { id: 3, name: 'Item 3', price: 150, status: 'rejected'}  
  ];
}
