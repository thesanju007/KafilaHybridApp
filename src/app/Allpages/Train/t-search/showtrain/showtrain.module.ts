import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtrainPageRoutingModule } from './showtrain-routing.module';

import { ShowtrainPage } from './showtrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtrainPageRoutingModule
  ],
  declarations: [ShowtrainPage]
})
export class ShowtrainPageModule {}
