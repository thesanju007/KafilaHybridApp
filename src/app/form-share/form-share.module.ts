import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule   } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatRadioModule} from '@angular/material/radio';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    MatMenuModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,ReactiveFormsModule,
    MatSidenavModule ,
    MatSelectModule,
    MatTableModule,

    
  ]
})
export class FormShareModule { }
