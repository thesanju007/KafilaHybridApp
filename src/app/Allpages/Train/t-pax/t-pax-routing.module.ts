import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPaxPage } from './t-pax.page';

const routes: Routes = [
  {
    path: '',
    component: TPaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPaxPageRoutingModule {}
