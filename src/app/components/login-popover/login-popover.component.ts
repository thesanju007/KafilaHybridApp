import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { TestService } from '../../Services/test.service'
@Component({
  selector: 'app-login-popover',
  templateUrl: './login-popover.component.html',
  styleUrls: ['./login-popover.component.scss'],
})
export class LoginPopoverComponent implements OnInit {


  constructor(public popoverController: PopoverController, private tService: TestService) { }
  uType
  ngOnInit() {
    this.tService.getTestData("../../../assets/userType.json").subscribe(result => {
      this.uType = result
    });
  }

  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),
    cre2: new FormControl('', [Validators.required]),
    cre3: new FormControl('', [Validators.required]),
    cre4: new FormControl('', [Validators.required])

  })


  closeModel() {
    
    let data = {
      cred1: this.set_cre.value.cre1,
      cred2: this.set_cre.value.cre2,
      cred3: this.set_cre.value.cre3,
      tp: this.set_cre.value.cre4
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