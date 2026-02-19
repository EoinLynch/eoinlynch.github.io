import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'blog', component: Blog },
  { path: 'projects', component: Projects },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' },
];

