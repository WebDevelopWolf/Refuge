import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ToastService } from '../_services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private toast: ToastService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.toast.success('Continue your story...', 'Welcome Back ' + this.model.username);
    }, error => {
      this.toast.error(error, 'Zombies ate your login - try again');
    }, () => {
      this.router.navigate(['/home']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.toast.success('Come back soon!', 'Goodbye!');
    this.router.navigate(['/home']);
  }

}
