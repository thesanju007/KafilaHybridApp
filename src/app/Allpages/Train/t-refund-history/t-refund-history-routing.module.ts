import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TRefundHistoryPage } from './t-refund-history.page';

const routes: Routes = [
  {
    path: '',
    component: TRefundHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TRefundHistoryPageRoutingModule {}
