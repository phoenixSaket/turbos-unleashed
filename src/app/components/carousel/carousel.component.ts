import { Component, Input, OnInit } from '@angular/core';
import { limiter, news, newsContent } from '../../content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  news = newsContent;
  currentImage: number = 0;
  scrollLevel: number = 0;

  images: string[] = [];
  img: string = this.news[this.currentImage].img;
  title: string = this.news[this.currentImage].title;
  description: string = this.news[this.currentImage].description;
  limiter: limiter = this.news[this.currentImage].limiter;
  limit: number = this.news[this.currentImage].limit || 0;

  ngOnInit() {
    this.news.forEach(el => {
      this.images.push(el.img);
    });
  }

  next() {
    if (this.currentImage == this.images.length - 1) {
      this.previous();
      setTimeout(()=> {
        this.currentImage = 0;
      }, 200);
      return;
    }
    this.currentImage += 1; 
    this.scrollLevel = 1;
    this.slide();
  }

  previous() {
    if (this.currentImage == 0) {
      this.next();
      setTimeout(() => {
        this.currentImage = this.news.length - 1;
      }, 200);
      return;
    }
    this.currentImage -= 1; 
    this.scrollLevel = -1;
    this.slide();
  }

  slide() {
    const width = document.getElementsByClassName("news-image")[0].clientWidth;
    const multi = document.getElementsByClassName("multi")[0];

    multi.scrollBy(width * this.scrollLevel, 0);
  }

}

