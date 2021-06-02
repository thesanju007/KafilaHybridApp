import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FooterPage } from '../footer/footer.page';
import { HeaderPage } from '../header/header.page';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [HomePage,FooterPage,HeaderPage]
})
export class HomePageModule {}
