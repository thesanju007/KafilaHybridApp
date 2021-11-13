import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule, MatNativeDateModule, MatRippleModule, MatSelectModule, MatTabsModule

  ],
  providers: [DatePipe]
})
export class FormShareModule { }
