import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../form-share/form-share.module';

import { AlertPopoverComponent } from '../alert-popover/alert-popover.component'

@NgModule({
  declarations: [AlertPopoverComponent],
  imports: [
    CommonModule,
    FormShareModule,

  ],
  exports: [AlertPopoverComponent],

})
export class AlertPopoverModule {
   
}