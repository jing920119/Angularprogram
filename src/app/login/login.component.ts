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

}
