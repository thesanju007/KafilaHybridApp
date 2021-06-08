import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
  ],
  exports:[
    MatMenuModule,
    MatIconModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class FormShareModule { }
