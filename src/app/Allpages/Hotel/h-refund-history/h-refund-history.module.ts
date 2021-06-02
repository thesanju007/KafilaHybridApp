import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HRefundHistoryPageRoutingModule } from './h-refund-history-routing.module';

import { HRefundHistoryPage } from './h-refund-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HRefundHistoryPageRoutingModule
  ],
  declarations: [HRefundHistoryPage]
})
export class HRefundHistoryPageModule {}
