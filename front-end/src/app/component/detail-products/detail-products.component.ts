import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  imports: [RouterModule, FormsModule],
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.css'
})
export class DetailProductsComponent {
  quantity: number = 1;

  changeQuantity(amount: number): void {
    const newValue = this.quantity + amount;
    this.quantity = newValue < 1 ? 1 : newValue;
  }
}
