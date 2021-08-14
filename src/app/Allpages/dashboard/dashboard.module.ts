import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { FormShareModule } from '../../form-share/form-share.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardPageRoutingModule,
    FormShareModule
  ],

  declarations: [DashboardPage]
})
export class DashboardPageModule {}
