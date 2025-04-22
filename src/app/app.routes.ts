import { Routes } from '@angular/router';
import { FreezerContentsComponent } from './components/freezer-contents/freezer-contents.component';
import { AddFreezerItemComponent } from './components/add-freezer-item/add-freezer-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contents', pathMatch: 'full' },
  { path: 'contents', component: FreezerContentsComponent },
  { path: 'add', component: AddFreezerItemComponent },
  { path: '**', redirectTo: 'contents' }
];
