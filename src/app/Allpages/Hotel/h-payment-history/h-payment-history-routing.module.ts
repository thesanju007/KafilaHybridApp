import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HPaymentHistoryPage } from './h-payment-history.page';

const routes: Routes = [
  {
    path: '',
    component: HPaymentHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HPaymentHistoryPageRoutingModule {}
