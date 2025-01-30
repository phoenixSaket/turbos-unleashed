import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input() img: string = "/laFerrari.png";
  @Input() title: string = "title";
  @Input() description: string = "description";
  @Input() limit: limiter = limiter.none;

}

export enum limiter {
  "line", "characters", "none"
}