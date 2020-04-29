import { Injectable } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

constructor(private toaster: Toaster) { }
success(message: string, title: string) {
  this.toaster.open({
    text: message,
    caption: title,
    type: 'success',
  });
}

error(message: string, title: string) {
  this.toaster.open({
    text: message,
    caption: title,
    type: 'danger',
  });
}

warning(message: string, title: string) {
  this.toaster.open({
    text: message,
    caption: title,
    type: 'warning',
  });
}

message(message: string, title: string) {
  this.toaster.open({
    text: message,
    caption: title,
    type: 'light',
  });
}
}
