import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TTransactionsPage } from './t-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TTransactionsPageRoutingModule {}
