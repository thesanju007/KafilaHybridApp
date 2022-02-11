import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPaxPageRoutingModule } from './t-pax-routing.module';

import { TPaxPage } from './t-pax.page';
import { AutoFocus } from '../../../directive/auti-focus.directive'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPaxPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TPaxPage,AutoFocus]
})
export class TPaxPageModule {}
