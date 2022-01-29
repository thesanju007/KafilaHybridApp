import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../../form-share/form-share.module';
import{AgencyProfileComponent} from '../agency-profile/agency-profile.component'
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [AgencyProfileComponent],
  imports: [
    CommonModule,
    FormShareModule,
    MatExpansionModule
  ],
  exports: [AgencyProfileComponent]
})
export class FModuleModule { }
