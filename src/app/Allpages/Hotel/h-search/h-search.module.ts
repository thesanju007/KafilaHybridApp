import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HSearchPageRoutingModule } from './h-search-routing.module';

import { HSearchPage } from './h-search.page';
import { FormShareModule } from '../../../form-share/form-share.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HSearchPageRoutingModule,
    FormShareModule
  ],
  declarations: [HSearchPage]
})
export class HSearchPageModule {}
