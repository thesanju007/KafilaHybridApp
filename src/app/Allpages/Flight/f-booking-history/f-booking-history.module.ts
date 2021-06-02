import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FBookingHistoryPageRoutingModule } from './f-booking-history-routing.module';

import { FBookingHistoryPage } from './f-booking-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FBookingHistoryPageRoutingModule
  ],
  declarations: [FBookingHistoryPage]
})
export class FBookingHistoryPageModule {}
