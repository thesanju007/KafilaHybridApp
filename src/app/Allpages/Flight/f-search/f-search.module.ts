import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FSearchPageRoutingModule } from './f-search-routing.module';
import { FSearchPage } from './f-search.page';
import { FormShareModule } from '../../../form-share/form-share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FSearchPageRoutingModule,
    ReactiveFormsModule,
    FormShareModule
    
  ],
  declarations: [FSearchPage]
})
export class FSearchPageModule {}
