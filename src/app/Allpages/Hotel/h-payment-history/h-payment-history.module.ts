import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HPaymentHistoryPageRoutingModule } from './h-payment-history-routing.module';

import { HPaymentHistoryPage } from './h-payment-history.page';
//import {PaymentModule} from '../../../components/payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HPaymentHistoryPageRoutingModule
   
  ],
  declarations: [HPaymentHistoryPage],
})
export class HPaymentHistoryPageModule {}
