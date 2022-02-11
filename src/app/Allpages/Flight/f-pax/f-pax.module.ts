import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FPaxPageRoutingModule } from './f-pax-routing.module';

import { FPaxPage } from './f-pax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FPaxPageRoutingModule
  ],
  declarations: [FPaxPage]
})
export class FPaxPageModule {}
