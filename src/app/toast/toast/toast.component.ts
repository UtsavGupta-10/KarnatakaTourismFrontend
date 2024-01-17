// toast.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toasts: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  show(toast: any): void {
    this.toasts.push(toast);
    setTimeout(() => this.toasts.shift(), 3000); // Remove the toast after 3 seconds
  }

  removeToast(toast: any): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
