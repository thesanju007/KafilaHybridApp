import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../form-share/form-share.module';
import { PaymentComponent } from './payment.component';
import { fromEventPattern } from 'rxjs';


@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    FormShareModule
  ],
  exports:[PaymentComponent],
  
})
export class PaymentModule { 
 
}
