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

  products_sale = [
      { id: 1, name: 'Product 1', price: 72000, originalPrice: 120000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/image.jpg', discount: '40%' },
      { id: 2, name: 'Product 2', price: 85000, originalPrice: 130000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '30%' },
      { id: 3, name: 'Product 3', price: 90000, originalPrice: 150000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '20%' },
      { id: 4, name: 'Product 4', price: 60000, originalPrice: 100000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '50%' },
      { id: 5, name: 'Product 5', price: 75000, originalPrice: 125000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '25%' },
      { id: 6, name: 'Product 6', price: 80000, originalPrice: 140000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '35%' },
    ];

    allProducts = [
      { id: 1, name: 'Product 1', price: 72000, originalPrice: 120000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/image.jpg', discount: '40%' },
      { id: 2, name: 'Product 2', price: 85000, originalPrice: 130000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '30%' },
      { id: 3, name: 'Product 3', price: 90000, originalPrice: 150000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '20%' },
      { id: 4, name: 'Product 4', price: 60000, originalPrice: 100000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '50%' },
      { id: 5, name: 'Product 5', price: 75000, originalPrice: 125000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '25%' },
      { id: 6, name: 'Product 6', price: 80000, originalPrice: 140000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '35%' },
      { id: 7, name: 'Product 7', price: 95000, originalPrice: 160000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '45%' },
      { id: 8, name: 'Product 8', price: 70000, originalPrice: 110000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '40%' },
      { id: 9, name: 'Product 9', price: 65000, originalPrice: 105000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '30%' },
      { id: 10, name: 'Product 10', price: 78000, originalPrice: 120000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '20%' },
      { id: 11, name: 'Product 11', price: 82000, originalPrice: 130000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '50%' },
      { id: 12, name: 'Product 12', price: 88000, originalPrice: 140000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '25%' },
      { id: 13, name: 'Product 13', price: 92000, originalPrice: 150000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '35%' },
      { id: 14, name: 'Product 14', price: 68000, originalPrice: 110000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '45%' },
      { id: 15, name: 'Product 15', price: 74000, originalPrice: 120000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '40%' },
      { id: 16, name: 'Product 16', price: 76000, originalPrice: 125000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '30%' },
      { id: 17, name: 'Product 17', price: 84000, originalPrice: 135000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '20%' },
      { id: 18, name: 'Product 18', price: 86000, originalPrice: 140000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '50%' },
      { id: 19, name: 'Product 19', price: 89000, originalPrice: 145000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '25%' },
      { id: 20, name: 'Product 20', price: 91000, originalPrice: 150000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '35%' },
      { id: 21, name: 'Product 21', price: 93000, originalPrice: 155000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '45%' },
      { id: 22, name: 'Product 22', price: 95000, originalPrice: 160000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '40%' },
      { id: 23, name: 'Product 23', price: 97000, originalPrice: 165000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '30%' },
      { id: 24, name: 'Product 24', price: 99000, originalPrice: 170000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '20%' },
      { id: 25, name: 'Product 25', price: 100000, originalPrice: 175000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '50%' },
      { id: 26, name: 'Product 26', price: 102000, originalPrice: 180000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '25%' },
      { id: 27, name: 'Product 27', price: 104000, originalPrice: 185000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '35%' },
      { id: 28, name: 'Product 28', price: 106000, originalPrice: 190000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '45%' },
      { id: 29, name: 'Product 29', price: 108000, originalPrice: 195000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '40%' },
      { id: 30, name: 'Product 30', price: 110000, originalPrice: 200000, rating:5, reviews: 79, img: 'assets/img/home/flashsale/xin-chao-noi-so-1.jpg', discount: '30%' },
    ];
  }
