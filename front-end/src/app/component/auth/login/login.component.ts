import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LocalStorageService } from '../../../services/auths/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  providers: [LocalStorageService],
  styleUrl: './login.component.css'
})
export class LoginComponent {
  phone: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  login() {
    if (!this.phone) {
      this.errorMessage = 'Vui lòng điền số điện thoại';
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Vui lòng nhập mật khẩu';
      return;
    }

    const user = this.localStorageService.findUser(this.phone, this.password);
    if (!user) {
      this.errorMessage = 'Tài khoản hoặc mật khẩu không đúng';
      return;
    }
    this.router.navigate(['/']);
  }

  validatePhone() {
    if (!this.phone) {
      this.errorMessage = 'Vui lòng điền số điện thoại';
    } else {
      this.errorMessage = '';
    }
  }

  validatePassword() {
    if (!this.password) {
      this.errorMessage = 'Vui lòng nhập mật khẩu';
    } else {
      this.errorMessage = '';
    }
  }
}
