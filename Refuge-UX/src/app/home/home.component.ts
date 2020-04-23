import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  story: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStory();
  }

  getStory() {
    this.http.get('http://localhost:5000/api/stories/1').subscribe(response => {
      this.story = response;
    }, error => {
      console.log(error);
    });
  }

}
