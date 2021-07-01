import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../form-share/form-share.module';
import { LoginPopoverComponent } from './login-popover.component'

@NgModule({
  declarations: [LoginPopoverComponent],
  imports: [
    CommonModule,
    FormShareModule,

  ],
  exports: [LoginPopoverComponent],

})
export class LoginPopoverModule {

}