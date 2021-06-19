import { Component, OnInit,Input  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-login-popover',
  templateUrl: './login-popover.component.html',
  styleUrls: ['./login-popover.component.scss'],
})
export class LoginPopoverComponent implements OnInit {

  constructor(private route: Router,public popoverController: PopoverController) { }
  @Input() model_title: string;
  ngOnInit() {
   
  }
  set_cre = new FormGroup({
    cre1: new FormControl('', [Validators.required]),
    cre2: new FormControl('', [Validators.required]),
    cre3: new FormControl('', [Validators.required])

  })
  async closeModel() {
    let close= "Modal Removed";
    this.popoverController.dismiss(close);
    console.log("eds");
  }
  signin() {
    this.route.navigate(['home']);
    console.log("eds");
    console.log(this.set_cre.value);

  }
}
