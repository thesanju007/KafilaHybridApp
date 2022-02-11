import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { AlertPopoverComponent } from '../../../components/alert-popover/alert-popover.component';
@Component({
  selector: 'app-t-pax',
  templateUrl: './t-pax.page.html',
  styleUrls: ['./t-pax.page.scss'],
})
export class TPaxPage implements OnInit {


  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  pax_all_obj: FormGroup
  ind: any = 1
  age_chk: Number
  opt_chd_bth = false
  pax_arr: FormArray;
  add_pass_show = true
  Token: any
  id_card = [
    { value: "NULL_IDCARD", name: "Choose ICard" },
    { value: "DRIVING_LICENSE", name: "DRIVING_LICENSE" },
    { value: "PASSPORT", name: "PASSPORT" },
    { value: "PANCARD", name: "PANCARD" },
    { value: "VOTER_ICARD", name: "VOTER ICARD" },
    { value: "GOVT_ICARD", name: "GOVT ICARD" },
    { value: "STUDENT_ICARD", name: "STUDENT ICARD" },
    { value: "BANK_PASSBOOK", name: "BANK PASSBOOK" },
    { value: "CREDIT_CARD", name: "CREDIT CARD" },
    { value: "UNIQUE_ICARD", name: "UNIQUE ICARD" },
  ]
  constructor(private route: Router, private fb: FormBuilder, public popoverController: PopoverController,
    public toastController: ToastController,
    public loadingController: LoadingController, public datepipe: DatePipe) { }


  ngOnInit() {
    this.pax_all_obj = this.fb.group({
      pax_arr: this.fb.array([this.createItem()]),
      address: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      colony: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.pattern('[0-9]{6}')]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      post_office: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.pattern('[0-9]{10}')]),
      irctc_id: new FormControl('', [Validators.required]),
      gst_no: new FormControl(''),
      auto_upgradation: new FormControl(''),
      book_only: new FormControl(''),
      travel_insurance: new FormControl(''),
      t_and_c: new FormControl(''),
      boarding: new FormControl('')
    })



    this.Token = localStorage.getItem("Token")

  }


  ageVal(event: any) {

    if (event.target.value >= 5 && event.target.value <= 12) {
      this.opt_chd_bth = true
      console.log(event.target.value)
      console.log(this.opt_chd_bth)
    }
    else {
      this.opt_chd_bth = false
    }

  }



  createItem() {
    return this.fb.group({
      pas_name: new FormControl('', [Validators.required]),
      pas_age: new FormControl('', [Validators.required]),
      pas_opt_chk:new FormControl(''),
      pas_gender: new FormControl('', [Validators.required]),
      pas_country: new FormControl('India', [Validators.required]),
      pas_id: new FormControl("NULL_IDCARD", [Validators.required]),
      pas_id_no: new FormControl('', [Validators.required]),


    });
  }
  addItem(): void {
    this.pax_arr = this.pax_all_obj.get('pax_arr') as FormArray;
    if (this.pax_arr.length < 6) {
      this.pax_arr.push(this.createItem());
    }
    if (this.pax_arr.length > 5) {
      this.add_pass_show = false
    }

    this.ind = this.pax_arr.length

  }



  removeRow(index) {
    (<FormArray>this.pax_all_obj.get("pax_arr")).removeAt(index);
    this.add_pass_show = true
    this.ind = index
  }


  onSubmit() {
    console.log(this.pax_all_obj.value)

  }









  isLoading = false;
  async present(id, src, des) {
    this.isLoading = true;
    const popover = await this.popoverController.create({
      component: AlertPopoverComponent,
      cssClass: 'alert-popover_setting',
      translucent: true,
      // mode: 'ios',
      backdropDismiss: false,
      componentProps: {
        "paramID": id,
        "s": src,
        "d": des
      },
    })
    return await popover.present();

  }


  async DismissClick() {
    await this.popoverController.dismiss();
  }



  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log(''));
  }
}
