import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductAddComponent } from './features/product/product-add/product-add.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';

export const routes: Routes = [
  { path: 'admin/products', component: ProductListComponent},
  { path: 'admin/products/add', component: ProductAddComponent},
  { path: 'admin/products/:id', component: ProductEditComponent},

];
