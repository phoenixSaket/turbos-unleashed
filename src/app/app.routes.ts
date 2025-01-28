import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuickLinksComponent } from './pages/quick-links/quick-links.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: '', loadComponent: () => HomeComponent },
    { path: 'quick-links', loadComponent: () => QuickLinksComponent },
    { path: 'photos', loadComponent: () => PhotosComponent },
    { path: 'shopping', loadComponent: () => ShoppingComponent },
    { path: 'faq', loadComponent: () => FaqComponent },
    { path: 'about-us', loadComponent: () => AboutUsComponent },
    { path: 'profile', loadComponent: () => ProfileComponent }
];
