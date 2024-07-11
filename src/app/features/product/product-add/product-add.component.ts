
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService, private route: Router) {}
  ngOnInit(): void {

  }

  product = {
    name: '',
    description: '',
    price: 0
  }

  hasValue = false;
  addProd(){
    console.log(this.product)
    this.productService.addProducts(this.product).subscribe(
      response => {
        alert("Product added successfully")
        console.log('Product added successfully', response)
        this.route.navigate(['/admin/products']);
      },
      error => {
        console.error('Error adding product', error)
      }
    );
  }

  isFormComplete(): boolean {
    return this.product.name !== "" && this.product.description !== "" && this.product.price !== null;
  }
}
