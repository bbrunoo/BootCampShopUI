import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:7219/product');
  }

  getProductsById(productId: string): Observable<Product> {
    return this.http.get<Product>(`https://localhost:7219/product/${(productId)}`,)
  }

  addProducts(product: Product): Observable<Product>{
    return this.http.post<Product>('https://localhost:7219/product', product);
  }

  delProducts(product: Product): Observable<Product>{
    return this.http.delete<Product>(`https://localhost:7219/product/${product.id}`);
  }

  editProduct(productId:string, product:Product): Observable<Product>{
    return this.http.put<Product>(`https://localhost:7219/product/${productId}`, product);
  }
}
