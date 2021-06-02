import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TBookingHistoryPage } from './t-booking-history.page';

const routes: Routes = [
  {
    path: '',
    component: TBookingHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TBookingHistoryPageRoutingModule {}
