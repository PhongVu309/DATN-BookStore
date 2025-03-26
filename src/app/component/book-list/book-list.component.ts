import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Danh sách sách</h2>

      <div *ngIf="loading" class="text-center">
        <p>Đang tải dữ liệu...</p>
      </div>

      <div *ngIf="error" class="alert alert-danger">
        {{ error }}
      </div>

      <div class="row">
        <div *ngFor="let book of books" class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ book.author }}</h6>
              <p class="card-text">{{ book.description | slice:0:100 }}...</p>
              <p><strong>Giá: </strong>{{ book.price | currency:'VND' }}</p>
              <p><strong>Số lượng: </strong>{{ book.quantity }}</p>
              <p><strong>Trạng thái: </strong>{{ book.available ? 'Còn hàng' : 'Hết hàng' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      height: 100%;
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  `]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  loading = false;
  error: string | null = null;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.loading = true;
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Không thể tải danh sách sách. Vui lòng thử lại sau.';
        this.loading = false;
        console.error('Có lỗi khi tải danh sách sách:', err);
      }
    });
  }
}
