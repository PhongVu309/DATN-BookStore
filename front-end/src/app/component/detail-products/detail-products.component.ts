import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.css'
})
export class DetailProductsComponent {
  quantity: number = 1;
  product = {
    title: 'Giải Mã Mê Cung - Phát Triển IQ - Đại Dương',
    publisher: 'NXB Hà Nội',
    author: 'Nhóm tác giả',
    distributor: 'Đinh Tị',
    price: 54600,
    originalPrice: 70000,
    description: [
      `Xin Chào, Nỗi Sợ của Michelle Poler không phải là cuốn sách kỹ năng tuổi teen sẽ hướng dẫn bạn những cách để đừng sợ hãi nữa, mà là hãy can đảm lên, để bạn có thể trở thành một phiên bản xịn sò hơn của chính mình.`,
      `Tác giả Michelle Poler của Xin Chào, Nỗi Sợ là người đã thực hiện #DựÁn100Ngày, trong đó cô đối mặt với 100 thử thách khiến mình sợ hãi như: Nhảy dù, khiêu vũ trên phố như thể không người, ăn côn trùng, triệt lông kiểu Brazil…`,
      `Một trong những điều hay nhất của Xin Chào, Nỗi Sợ là nó không cố đập vỡ nỗi sợ hãi của bạn. Bởi chính tác giả Michelle Poler cũng đã thừa nhận rằng trước đây cô là một cô gái luôn sợ sệt, không dám bước qua vùng an toàn của mình...`,
      `Bạn biết rằng mình có nhiều ước mơ hơn thế này, hoặc đơn giản chỉ là một danh sách những điều mới mẻ muốn thử, nhưng bạn không thực hiện chúng vì có quá nhiều e ngại?`
    ]
  };

  changeQuantity(amount: number): void {
    const newValue = this.quantity + amount;
    this.quantity = newValue < 1 ? 1 : newValue;
  }
}
