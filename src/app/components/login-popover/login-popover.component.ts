import { Component, OnInit, ContentChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-login-popover',
  templateUrl: './login-popover.component.html',
  styleUrls: ['./login-popover.component.scss'],
})
export class LoginPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

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

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}