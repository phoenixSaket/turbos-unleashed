import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public isOpened: boolean = false;

  constructor() { }

  openSidebar() {
    this.isOpened = true;
  }

  closeSidebar() {
    this.isOpened = false;
  }

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }

  get isSidebarOpened(): boolean {
    return this.isOpened;
  }
}
