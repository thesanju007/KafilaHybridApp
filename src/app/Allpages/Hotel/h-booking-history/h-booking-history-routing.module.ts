import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HBookingHistoryPage } from './h-booking-history.page';

const routes: Routes = [
  {
    path: '',
    component: HBookingHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HBookingHistoryPageRoutingModule {}
