import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RlLogComponent} from '../rl-log/rl-log.component'
import { FormShareModule } from '../../../form-share/form-share.module';
import{LogModalComponent}from '../log-modal/log-modal.component'
@NgModule({
  declarations: [RlLogComponent,LogModalComponent],
  imports: [
    CommonModule,FormShareModule
  ]
})
export class DevModuleModule { }
