import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: CardComponent },
  { path: '**', component: PageNotFoundComponent },
];
