import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-pending-history',
  templateUrl: './pending-history.component.html',
  styleUrls: ['./pending-history.component.scss'],
})
export class PendingHistoryComponent implements OnInit {

  lableText: string = "";
    inputValue: string = " ";
    constructor() {}

    inputValueToLable(){
      console.log(this.inputValue);
      this.lableText = this.inputValue;
    }

  ngOnInit() {}

}
