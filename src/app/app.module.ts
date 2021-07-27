import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

//import { PaymentModule } from './components/payment/payment.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule
   // PaymentModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
