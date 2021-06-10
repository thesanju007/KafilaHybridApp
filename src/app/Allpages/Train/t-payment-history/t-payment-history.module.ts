import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormShareModule } from '../../../form-share/form-share.module';
import { IonicModule } from '@ionic/angular';

import { TPaymentHistoryPageRoutingModule } from './t-payment-history-routing.module';

import { TPaymentHistoryPage } from './t-payment-history.page';
import {PaymentModule} from '../../../components/payment/payment.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPaymentHistoryPageRoutingModule,
    PaymentModule,
    FormShareModule
  ],
  declarations: [TPaymentHistoryPage]
})
export class TPaymentHistoryPageModule {}
