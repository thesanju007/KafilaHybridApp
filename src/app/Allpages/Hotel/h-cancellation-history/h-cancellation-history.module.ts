import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HCancellationHistoryPageRoutingModule } from './h-cancellation-history-routing.module';

import { HCancellationHistoryPage } from './h-cancellation-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HCancellationHistoryPageRoutingModule
  ],
  declarations: [HCancellationHistoryPage]
})
export class HCancellationHistoryPageModule {}
