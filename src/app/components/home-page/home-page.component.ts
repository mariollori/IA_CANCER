import { Component, AfterViewInit, OnInit  } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  images: string[] = [
    'https://www.kurir.rs/data/images/2022/11/02/22/3234266_10-result_ff.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1',
    'https://www.kurir.rs/data/images/2022/11/02/22/3234266_10-result_ff.jpg'
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }
}
