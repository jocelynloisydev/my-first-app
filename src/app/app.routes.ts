import { Routes } from '@angular/router'
import { Home } from './features/home/home'
import {About} from './features/about/about';
import {Contact} from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];
