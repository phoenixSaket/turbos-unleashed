import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) { }
}
