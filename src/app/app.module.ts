import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginPopoverModule } from '../app/components/login-popover/login-popover.module';
// import { AirportFilterPipe } from './Allpipes/airport-filter.pipe'
//import { PaymentModule } from './components/payment/payment.module';
import {AlertPopoverModule} from '../app/components/alert-popover/alert-popover.module'
@NgModule({
   declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
   // PaymentModule,
   LoginPopoverModule,
   AlertPopoverModule,


  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
