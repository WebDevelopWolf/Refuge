import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private toast: ToastService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.toast.success('Continue your story...', 'Welcome Back ' + this.model.username);
    }, error => {
      this.toast.error(error, 'Zombies ate your login - try again');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    this.toast.success('Come back soon!', 'Goodbye!');
  }

}
