import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TShowPageRoutingModule } from './t-show-routing.module';

import { TShowPage } from './t-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TShowPageRoutingModule
  ],
  declarations: [TShowPage]
})
export class TShowPageModule {}
