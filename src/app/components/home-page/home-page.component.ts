import { Component, AfterViewInit, OnInit  } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  images: string[] = [
    'https://www.institutoncologicofalp.cl/wp-content/uploads/2022/08/mama-principa-landing-4.png',
    'https://nuestralucha.pe/hubfs/%5BOncosalud%20Campa%C3%B1a%20C%C3%A1ncer%20de%20Mama%5D%20Landing%20Banner%20Home%20AF_1%20desktoop-2.png',
    'https://www.institutoncologicofalp.cl/wp-content/uploads/2022/08/mama-principa-landing-4.png'
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }
}
