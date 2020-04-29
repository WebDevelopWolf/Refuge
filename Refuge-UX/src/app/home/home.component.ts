import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  story: any;
  constructor(private http: HttpClient, private authService: AuthService, private toast: ToastService) { }
  registerMode = false;

  ngOnInit() {
    this.getStory();
  }

  getStory() {
    this.http.get('http://localhost:5000/api/stories/1').subscribe(response => {
      this.story = response;
    }, error => {
      this.toast.error(error, 'Internal Zombie Story Plot Hole');
    });
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
