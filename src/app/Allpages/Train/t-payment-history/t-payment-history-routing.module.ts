import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPaymentHistoryPage } from './t-payment-history.page';

const routes: Routes = [
  {
    path: '',
    component: TPaymentHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPaymentHistoryPageRoutingModule {}
