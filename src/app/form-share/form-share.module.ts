import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
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
    MatPaginatorModule
  ]
})
export class FormShareModule { }
