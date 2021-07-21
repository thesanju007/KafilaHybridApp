import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';
import { FormShareModule } from '../../form-share/form-share.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IndexPageRoutingModule,
    FormShareModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {
}
