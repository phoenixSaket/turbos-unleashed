import { Component, OnInit } from '@angular/core';
import { Link, links } from '../../content';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  links: Link[] = [];

  constructor(private router: Router, public sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.links = JSON.parse(JSON.stringify(links));
  }

  toggleSideBar() {
    this.sidebarService.toggleSidebar();
  }

  checkURL(url: string = "") {
    try {
      let activeURL = "";
      this.links.map(link => link.isActive = false);
      this.links.map(link => {
        if (url.includes(link.name)) {
          link.isActive = true;
          activeURL = link.href;
        }
      });

      this.router.navigate([activeURL])
    } catch (err: any) {
      console.log("NavbarComponent.checkURL caught an error: ", err);
    }
  }

}
