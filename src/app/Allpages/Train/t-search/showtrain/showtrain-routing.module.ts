import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtrainPage } from './showtrain.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtrainPageRoutingModule {}
