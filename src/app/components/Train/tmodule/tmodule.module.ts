import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../../form-share/form-share.module';
import { RLAgentListComponent } from '../rlagent-list/rlagent-list.component'


@NgModule({
  declarations: [RLAgentListComponent],
  imports: [
    CommonModule, FormShareModule
  ],
  exports: [RLAgentListComponent]
})
export class TmoduleModule { }
