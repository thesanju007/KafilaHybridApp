import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HSearchPage } from './h-search.page';

const routes: Routes = [
  {
    path: '',
    component: HSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HSearchPageRoutingModule {}
