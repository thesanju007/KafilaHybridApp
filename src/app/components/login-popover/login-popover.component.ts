import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-login-popover',
  templateUrl: './login-popover.component.html',
  styleUrls: ['./login-popover.component.scss'],
})
export class LoginPopoverComponent implements OnInit {

  constructor(private route: Router, public popoverController: PopoverController) { }

  ngOnInit() { }

  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),
    cre2: new FormControl('', [Validators.required]),
    cre3: new FormControl('', [Validators.required])

  })
 

  closeModel() {
    let data = {
      cre1: this.set_cre.value.cre1,
      cre2: this.set_cre.value.cre2,
      cre3: this.set_cre.value.cre3,
    }
    this.popoverController.dismiss(data)
  }



}