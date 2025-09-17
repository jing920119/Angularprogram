import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule  // ✅ 用這個，而不是 BrowserModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;
  showPassword = false;

  ngAfterViewInit(): void { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    const el = this.passwordInput?.nativeElement;
    if (el) el.type = this.showPassword ? 'text' : 'password';
    console.log(1);
  }

  onForgotPassword(): void {
    // 這裡可以導向忘記密碼頁面，或開啟 modal
    console.log('使用者點擊了忘記密碼');
    // 例如：this.router.navigate(['/forgot-password']);
  }

  onRegister(): void {
    // 這裡可以導向註冊頁面，或開啟註冊表單
    console.log('使用者點擊了註冊帳號');
    // 例如：this.router.navigate(['/register']);
  }

  LoginBtn(): void {
    // 這裡可以導向註冊頁面，或開啟註冊表單
    console.log('使用者點擊了登入');
    // 例如：this.router.navigate(['/register']);
  }


}
