import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TCancellationHistoryPageRoutingModule } from './t-cancellation-history-routing.module';

import { TCancellationHistoryPage } from './t-cancellation-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TCancellationHistoryPageRoutingModule
  ],
  declarations: [TCancellationHistoryPage]
})
export class TCancellationHistoryPageModule {}
