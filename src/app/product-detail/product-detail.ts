// product-detail/product-detail.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1>📦 Product Detail</h1>
    <p>You are viewing product with ID: <strong>{{ productId }}</strong></p>
    <a routerLink="/products">← Back to Products</a>
  `,
  imports: [RouterLink]
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  
  // Get the ID from the URL snapshot
  productId = this.route.snapshot.params['id'];
}
