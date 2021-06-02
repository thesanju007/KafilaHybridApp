import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TRefundHistoryPageRoutingModule } from './t-refund-history-routing.module';

import { TRefundHistoryPage } from './t-refund-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TRefundHistoryPageRoutingModule
  ],
  declarations: [TRefundHistoryPage]
})
export class TRefundHistoryPageModule {}
