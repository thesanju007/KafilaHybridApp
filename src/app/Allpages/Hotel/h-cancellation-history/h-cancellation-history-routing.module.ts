import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HCancellationHistoryPage } from './h-cancellation-history.page';

const routes: Routes = [
  {
    path: '',
    component: HCancellationHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HCancellationHistoryPageRoutingModule {}
