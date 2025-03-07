import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      name: 'Xin Chào, Nỗi Sợ (Hello, Fears)',
      price: 72000,
      originalPrice: 120000,
      discount: 40,
      imageUrl: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg',
      rating: 5,
      reviews: 79
    },
    {
      name: 'Đừng Thách Tôi',
      price: 72000,
      originalPrice: 120000,
      discount: 40,
      imageUrl: 'assets/img/home/flashsale/dung-thach-toi-1.jpg',
      rating: 5,
      reviews: 79
    },
    {
      name: 'Tỏa Sáng (Shine)',
      price: 72000,
      originalPrice: 120000,
      discount: 40,
      imageUrl: 'assets/img/home/flashsale/toa-sang-shine.jpg',
      rating: 5,
      reviews: 79
    },
    {
      name: 'Tỏa Sáng (Shine)',
      price: 72000,
      originalPrice: 120000,
      discount: 40,
      imageUrl: 'assets/img/home/flashsale/toa-sang-shine.jpg',
      rating: 5,
      reviews: 79
    },
    {
      name: 'Tỏa Sáng (Shine)',
      price: 72000,
      originalPrice: 120000,
      discount: 40,
      imageUrl: 'assets/img/home/flashsale/toa-sang-shine.jpg',
      rating: 5,
      reviews: 79
    }
  ];
}
