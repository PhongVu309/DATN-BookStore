import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/products/product.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductService],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  highDiscountProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
     // Lấy danh sách sản phẩm
     this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

    // Lấy sản phẩm giảm giá trên 30%
    this.productService.getHighDiscountProducts().subscribe(data => {
      this.highDiscountProducts = data;
    });

  }

}
