import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TCancellationHistoryPage } from './t-cancellation-history.page';

const routes: Routes = [
  {
    path: '',
    component: TCancellationHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TCancellationHistoryPageRoutingModule {}
