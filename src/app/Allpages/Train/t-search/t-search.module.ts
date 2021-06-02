import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TSearchPageRoutingModule } from './t-search-routing.module';
import { TSearchPage } from './t-search.page';
import { FormShareModule } from '../../../form-share/form-share.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TSearchPageRoutingModule,
    FormShareModule
  ],
  declarations: [TSearchPage]
})
export class TSearchPageModule {}
