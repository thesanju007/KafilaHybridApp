import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPaymentHistoryPageRoutingModule } from './t-payment-history-routing.module';

import { TPaymentHistoryPage } from './t-payment-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPaymentHistoryPageRoutingModule
  ],
  declarations: [TPaymentHistoryPage]
})
export class TPaymentHistoryPageModule {}
