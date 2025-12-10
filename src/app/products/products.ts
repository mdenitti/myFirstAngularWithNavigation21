// products/products.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  template: `
    <h1>🛍️ Products</h1>
    <ul>
      @for (product of products; track product.id) {
        <li>
          <a [routerLink]="['/products', product.id]">{{ product.name }}</a>
        </li>
      }
    </ul>
  `
})
export class Products {
  products = [
    { id: 1, name: 'Angular T-Shirt' },
    { id: 2, name: 'TypeScript Mug' },
    { id: 3, name: 'RxJS Stickers' },
    { id: 4, name: 'Continental breakfast Hoodie' },
    { id: 5, name: 'African Warlord TMNT Pizza t-shirt' }
  ];
}
