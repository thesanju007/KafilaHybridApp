import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../../form-share/form-share.module';
import { RoleManagementComponent } from '../role-management/role-management.component'
import {AddRoleModalComponent} from'../add-role-modal/add-role-modal.component'

@NgModule({
  declarations: [RoleManagementComponent,AddRoleModalComponent],
  imports: [
    CommonModule,
    FormShareModule
  ],
  exports: [RoleManagementComponent,AddRoleModalComponent]
})
export class AModuleModule { }
