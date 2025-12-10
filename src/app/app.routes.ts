import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
    { path: '', component: Home },                  // localhost:4200/
    { path: 'about', component: About },            // localhost:4200/about
    { path: 'products', component: Products },      // localhost:4200/products
    { path: 'products/:id', component: ProductDetail }, // localhost:4200/products/123
    { path: '**', redirectTo: '' }                  // Wildcard - redirect unknown routes
];
