import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HBookingHistoryPageRoutingModule } from './h-booking-history-routing.module';

import { HBookingHistoryPage } from './h-booking-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HBookingHistoryPageRoutingModule
  ],
  declarations: [HBookingHistoryPage]
})
export class HBookingHistoryPageModule {}
