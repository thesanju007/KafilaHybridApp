import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { FormShareModule } from '../../form-share/form-share.module';
import { FooterPage } from '../common/footer/footer.page';
import { AirportFilterPipe} from '../../Allpipes/airport-filter.pipe'
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardPageRoutingModule,
    FormShareModule
  ],

  declarations: [DashboardPage,FooterPage,AirportFilterPipe]
})
export class DashboardPageModule {}
