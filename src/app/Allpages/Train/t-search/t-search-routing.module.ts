import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TSearchPage } from './t-search.page';

const routes: Routes = [
  {
    path: '',
    component: TSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSearchPageRoutingModule {}
