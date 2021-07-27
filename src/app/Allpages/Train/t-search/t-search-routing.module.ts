import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TSearchPage } from './t-search.page';

const routes: Routes = [
  {
    path: '',
    component: TSearchPage
  },  {
    path: 'showtrain',
    loadChildren: () => import('./showtrain/showtrain.module').then( m => m.ShowtrainPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSearchPageRoutingModule {}
