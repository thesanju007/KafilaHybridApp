import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HTransactionsPage } from './h-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: HTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HTransactionsPageRoutingModule {}
