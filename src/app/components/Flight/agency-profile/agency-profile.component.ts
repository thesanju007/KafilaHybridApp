import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
// import Result from '../../../../assets/test.json'
@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.scss'],
})
export class AgencyProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private tService: TestService, public loadingController: LoadingController) { }
  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  isForm = false
  fShow = false
  aId: any
  contact: any
  aIsActive: any

  fIsActive: any
  fSearch: any
  fFareChk: any
  fPnrCre: any
  fTicktnum: any


  rIsActive: any
  rSearch: any
  rFareChk: any
  rPnrCre: any


  bIsActive: any
  bSearch: any
  bFareChk: any
  bPnrCre: any


  hIsActive: any
  hSearch: any
  hFareChk: any
  hPnrCre: any

  pIsActive: any
  pSearch: any
  pFareChk: any
  pPnrCre: any

  isApi: any
  isB2c: any
  isB2b: any

  dis_column = true

  edit_column = true

  ngOnInit() {


  }
  srhAgt(cForm) {
    console.log(cForm.value.aId)
    if (cForm.value.aId === "18785869") {
      this.fShow = true
      this.setDefaultForm()
    }

  }
  canAll() {
    this.fShow = false
  }
  setDefaultForm() {
    this.tService.getTestData("../../../../assets/test.json").subscribe(result => {
      this.contact = result[0]
      this.isForm = true
      this.aIsActive = this.contact.Credential.ISACTIVE.toString()

      this.fIsActive = this.contact.Product.Flight.ISACTIVE.toString()
      this.fSearch = this.contact.Product.Flight.SEARCH.toString()
      this.fFareChk = this.contact.Product.Flight.FARE_CHK.toString()
      this.fPnrCre = this.contact.Product.Flight.PNR_CREATION.toString()
      this.fTicktnum = this.contact.Product.Flight.TICKET_NUMBER.toString()


      this.rIsActive = this.contact.Product.Rail.ISACTIVE.toString()
      this.rSearch = this.contact.Product.Rail.SEARCH.toString()
      this.rFareChk = this.contact.Product.Rail.FARE_CHK.toString()
      this.rPnrCre = this.contact.Product.Rail.PNR_CREATION.toString()


      this.bIsActive = this.contact.Product.Bus.ISACTIVE.toString()
      this.bSearch = this.contact.Product.Bus.SEARCH.toString()
      this.bFareChk = this.contact.Product.Bus.AVLT_CHK.toString()
      this.bPnrCre = this.contact.Product.Bus.PNR_CREATION.toString()


      this.hIsActive = this.contact.Product.Hotel.ISACTIVE.toString()
      this.hSearch = this.contact.Product.Hotel.SEARCH.toString()
      this.hFareChk = this.contact.Product.Hotel.AVLT_CHK.toString()
      this.hPnrCre = this.contact.Product.Hotel.PNR_CREATION.toString()

      this.pIsActive = this.contact.Product.Packages.ISACTIVE.toString()
      this.pSearch = this.contact.Product.Packages.SEARCH.toString()
      this.pFareChk = this.contact.Product.Packages.AVLT_CHK.toString()
      this.pPnrCre = this.contact.Product.Packages.PNR_CREATION.toString()

      this.isApi = this.contact.ActiveModule.API.toString()
      this.isB2b = this.contact.ActiveModule.B2B.toString()
      this.isB2c = this.contact.ActiveModule.B2C.toString()

    })
  }
  editForm() {
    this.edit_column = false
  }

  onSubmit(contactForm) {
    this.edit_column = true
    let res = {
      "Id": contactForm.value.Id,
      "CompName": contactForm.value.CompName,
      "Email": contactForm.value.Email,
      "AltEmail": contactForm.value.AltEmail,
      "Mobile": contactForm.value.Mobile,
      "AltMobile": contactForm.value.AltMobile,
      "PanNo": contactForm.value.PanNo,
      "AdharNo": contactForm.value.AdharNo,
      "GstNo": contactForm.value.GstNo,
      "TDS": contactForm.value.TDS,
      "AgencyType": contactForm.value.AgencyType,
      "Reference": contactForm.value.Reference,
      "LastVerfied": contactForm.value.LastVerfied,
      "RegistrationTime": contactForm.value.RegistrationTime,
      "lastUpdateTime": contactForm.value.lastUpdateTime,
      "Address": {
        "FirstName": contactForm.value.FirstName,
        "LastName": contactForm.value.LastName,
        "Address1": contactForm.value.Address1,
        "Address2": contactForm.value.Address2,
        "City": contactForm.value.City,
        "State": contactForm.value.State,
        "Pin": contactForm.value.Pin,
        "Country": contactForm.value.Country
      },
      "Credential": {
        "ISACTIVE": this.aIsActive == 'true',
        "AgentId": contactForm.value.AgentId,
        "Uid": contactForm.value.Uid,
        "Pwd": contactForm.value.Pwd
      },
      "KycDetails": {
        "OwnerPhoto": "",
        "PanCardLink": "",
        "AdharCardLink": "",
        "AgencyLogo": "http://kafilaholidays.in//upload/_1500298376409_dummy_logo.jpg",
        "Other": ""
      },
      "Product": {
        "Flight": {
          "ISACTIVE": this.fIsActive == 'true',
          "SEARCH": this.fSearch == 'true',
          "FARE_CHK": this.fFareChk == 'true',
          "PNR_CREATION": this.fPnrCre == 'true',
          "TICKET_NUMBER": this.fTicktnum == 'true'
        },
        "Rail": {
          "ISACTIVE": this.rIsActive == 'true',
          "SEARCH": this.rSearch == 'true',
          "FARE_CHK": this.rFareChk == 'true',
          "PNR_CREATION": this.rPnrCre == 'true'
        },
        "Bus": {
          "ISACTIVE": this.bIsActive == 'true',
          "SEARCH": this.bSearch == 'true',
          "AVLT_CHK": this.bFareChk == 'true',
          "PNR_CREATION": this.bPnrCre == 'true'
        },
        "Hotel": {
          "ISACTIVE": this.hIsActive == 'true',
          "SEARCH": this.hSearch == 'true',
          "AVLT_CHK": this.hFareChk == 'true',
          "PNR_CREATION": this.hPnrCre == 'true'
        },
        "Packages": {
          "ISACTIVE": this.pIsActive == 'true',
          "SEARCH": this.pSearch == 'true',
          "AVLT_CHK": this.pFareChk == 'true',
          "PNR_CREATION": this.pPnrCre == 'true'
        }
      },
      "ActiveModule": {
        "API": this.isApi == 'true',
        "B2B": this.isB2b == 'true',
        "B2C": this.isB2c == 'true'
      }
    }
    console.log(res);
  }

  cancelForm() {
    this.edit_column = true
    this.setDefaultForm()
  }
}
