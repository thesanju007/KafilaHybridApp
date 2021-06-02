import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HRefundHistoryPage } from './h-refund-history.page';

const routes: Routes = [
  {
    path: '',
    component: HRefundHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HRefundHistoryPageRoutingModule {}
