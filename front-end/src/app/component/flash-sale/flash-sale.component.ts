import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-flash-sale',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './flash-sale.component.html',
  styleUrl: './flash-sale.component.css',
  providers: [ProductService],
})
export class FlashSaleComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 18;
  pages: (number | string)[] = [];
  highDiscountProducts: any[] = [];
  displayedProducts: any[] = [];

  @ViewChild('productContainer') productContainer!: ElementRef;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getHighDiscountProducts().subscribe((data) => {
      this.highDiscountProducts = data;
      this.totalPages = Math.ceil(this.highDiscountProducts.length / this.itemsPerPage);
      this.loadProducts();
    });
  }

  loadProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.highDiscountProducts.slice(startIndex, endIndex);
    this.generatePages();
  }

  generatePages(): void {
    const maxPagesToShow = 5;
    const pages: (number | string)[] = [];

    if (this.totalPages <= maxPagesToShow) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(this.currentPage - 1);
        pages.push(this.currentPage);
        pages.push(this.currentPage + 1);
        pages.push('...');
        pages.push(this.totalPages);
      }
    }

    this.pages = pages;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
      this.scrollToTop();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
      this.scrollToTop();
    }
  }

  goToPage(page: number): void {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.currentPage = page;
      this.loadProducts();
      this.scrollToTop();
    }
  }

  scrollToTop(): void {
    this.productContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
