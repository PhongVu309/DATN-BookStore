import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  original_price: number;
  rating: number;
  preview: string;
  discount: number;
  category_id: number;
  author_id: number;
  publisher_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getHighDiscountProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/flash-sale`);
  }
}
