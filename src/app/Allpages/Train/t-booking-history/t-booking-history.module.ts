import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TBookingHistoryPageRoutingModule } from './t-booking-history-routing.module';

import { TBookingHistoryPage } from './t-booking-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TBookingHistoryPageRoutingModule
  ],
  declarations: [TBookingHistoryPage]
})
export class TBookingHistoryPageModule {}
