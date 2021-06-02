import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TTransactionsPageRoutingModule } from './t-transactions-routing.module';

import { TTransactionsPage } from './t-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TTransactionsPageRoutingModule
  ],
  declarations: [TTransactionsPage]
})
export class TTransactionsPageModule {}
