import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HTransactionsPageRoutingModule } from './h-transactions-routing.module';

import { HTransactionsPage } from './h-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HTransactionsPageRoutingModule
  ],
  declarations: [HTransactionsPage]
})
export class HTransactionsPageModule {}
