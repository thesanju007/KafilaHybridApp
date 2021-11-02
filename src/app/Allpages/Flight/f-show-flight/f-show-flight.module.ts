import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FShowFlightPageRoutingModule } from './f-show-flight-routing.module';

import { FShowFlightPage } from './f-show-flight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FShowFlightPageRoutingModule
  ],
  declarations: [FShowFlightPage]
})
export class FShowFlightPageModule {}
