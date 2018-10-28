import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliderImages: String[];

  constructor() { }

  ngOnInit() {
    this.sliderImages = ["assets/images/education.jpg","assets/images/agriculture.jpg","assets/images/environment.jpg"]
  }  

  
 
}
