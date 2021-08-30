import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatRadioModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTooltipModule,
  
  ]
})
export class FormShareModule { }
