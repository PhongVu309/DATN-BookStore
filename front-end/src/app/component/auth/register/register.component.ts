import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../services/auths/local-storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule, FormsModule],
  providers: [LocalStorageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.phone || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin';
      return;
    }

    if (!/^\d+$/.test(this.phone)) {
      this.errorMessage = 'Số điện thoại phải là dạng số';
      return;
    }

    if (!this.email.includes('@gmail.com')) {
      this.errorMessage = 'Email không hợp lệ';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Mật khẩu phải có ít nhất 6 ký tự';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Mật khẩu không khớp';
      return;
    }

    if (this.localStorageService.userExists(this.phone)) {
      this.errorMessage = 'Tài khoản đã tồn tại';
      return;
    }

    this.localStorageService.saveUser({
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password
    });

    this.router.navigate(['/login']);
  }
}
