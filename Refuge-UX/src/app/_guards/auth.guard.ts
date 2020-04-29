import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ToastService } from '../_services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private toast: ToastService) {}
  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }
    this.toast.error('Please log in', 'Zombies are blocking your path!');
    this.router.navigate(['/home']);
    return false;
  }

}
