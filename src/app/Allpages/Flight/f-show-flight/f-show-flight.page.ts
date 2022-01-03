import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { AlertPopoverComponent } from '../../../components/alert-popover/alert-popover.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-f-show-flight',
  templateUrl: './f-show-flight.page.html',
  styleUrls: ['./f-show-flight.page.scss'],
})
export class FShowFlightPage implements OnInit {

  constructor(private tService: TestService, private route: Router, private fb: FormBuilder, public popoverController: PopoverController,
    public toastController: ToastController,
    public loadingController: LoadingController, public datepipe: DatePipe) { }
  f_all_data: any
  arr_data: any
  arr_data1: any
  t_type = "1"
  data = false
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  maxDate: any
  public STOPS = [
    { val: 'Non Stop', isChecked: false },
    { val: '1 Stop', isChecked: false },
    { val: '2 Stop', isChecked: false }
  ];
  public DEP_TIME = [
    { val: '0 - 6', isChecked: false },
    { val: '6 -12', isChecked: false },
    { val: '12 - 18', isChecked: false },
    { val: '18 - 24', isChecked: false }
  ];
  public ARR_TIME = [
    { val: '0 - 6', isChecked: false },
    { val: '6 -12', isChecked: false },
    { val: '12 - 18', isChecked: false },
    { val: '18 - 24', isChecked: false }
  ];
  public Come_FLIGHTS = [
    { val: 'Air India', isChecked: false },
    { val: 'Air Asia', isChecked: false },
    { val: 'Indigo', isChecked: false },
    { val: 'Spicejet', isChecked: false },
    { val: 'Vistara', isChecked: false },
    { val: 'Go First', isChecked: false }
  ];
  up1 = false
  down1 = true
  up2 = false
  down2 = true
  up3 = false
  down3 = true
  max_amt: any
  min_amt: any
  background: ThemePalette = 'primary'
  sr_str: any
  flightData
  depMarp = ""
  arp: any
  arp_new: any

  ngOnInit() {
    this.tService.getTestData("../../../assets/airport.json").subscribe(result => {

      this.arp = result
      this.arp_new = result
    });
    let srh_str = sessionStorage.getItem("srh_sctr")
    this.sr_str = JSON.parse(srh_str)
    let cnrt_f_data = sessionStorage.getItem("All_Flight")
    if (cnrt_f_data !== "") {
      this.data = true
      this.f_all_data = JSON.parse(cnrt_f_data)
      this.arr_data = this.f_all_data.FLIGHT
      this.arr_data1 = this.f_all_data.FLIGHTRT

      let r = this.arr_data.sort((n1: any, n2: any) => n1.AMT - n2.AMT)
      for (let d of r) {
        this.max_amt = Math.max(d.AMT)
      }

      let r2 = this.arr_data.sort((n1: any, n2: any) => n2.AMT - n1.AMT)
      for (let d of r2) {
        this.min_amt = Math.min(d.AMT)
      }

      // let uniqueObjects = [...new Map(this.f_all_data.FLIGHT.map(item => [item.F_NAME, item])).values()]
      // console.log(uniqueObjects )
    }
    this.t_type = this.sr_str.STR[0].TRIP

    this.flightData = this.fb.group({
      flighttype: new FormControl( this.sr_str.STR[0].TRIP),
      D_airport: new FormControl(this.sr_str.STR[0].SRC, [Validators.required]),
      A_airport: new FormControl(this.sr_str.STR[0].DES, [Validators.required]),
      D_date: new FormControl(this.sr_str.STR[0].DEP_DATE, [Validators.required]),
      A_date: new FormControl(this.sr_str.STR[0].DEP_DATE),
      PClass: new FormControl(''),
      PFlight: new FormControl(''),
      Adults: new FormControl(''),
      Childs: new FormControl(''),
      Infants: new FormControl(''),
    })
  }


  round_trip = false
  checkValue(t) {
    if (t.value == 2) {
      console.log("2")
      this.round_trip = true
    }
    else {
      this.round_trip = false
    }

  }


  stops: any
  a: any
  check(g: any) {
    this.a = g
    this.stops = !this.stops

  }
  sortBalAsc() {
    this.down1 = false
    this.up1 = true
    return this.arr_data.sort((a: { AMT: number; }, b: { AMT: number; }) => {
      return a.AMT - b.AMT;
    });
  }
  sortBalDesc() {
    this.down1 = true
    this.up1 = false
    return this.arr_data.sort((a: { AMT: number; }, b: { AMT: number; }) => {
      return b.AMT - a.AMT;
    });
  }
  Details() {
    alert("WORKING")
  }
  returnDate(d) {
    let latest_date = this.datepipe.transform(d, 'yyyy-MM-dd');

    this.minDate = latest_date
  }
  returnDateMax(d) {
    let latest_date = this.datepipe.transform(d, 'yyyy-MM-dd');
    this.maxDate = latest_date
  }


















  checkFlight() {

    let depApt = this.flightData.value.D_airport.substring(0, 3);
    let arrApt = this.flightData.value.A_airport.substring(0, 3);
    if (depApt != arrApt) {
      this.present(1, depApt, arrApt)
      let latest_date = this.datepipe.transform(this.flightData.value.D_date, 'yyyy-MM-dd');
      let ret_latest_date = this.datepipe.transform(this.flightData.value.A_date, 'yyyy-MM-dd');
      let data: any = {
        TYPE: "AIR",
        NAME: "GET_FLIGHT",
        STR: [
          {
            AUTH_TOKEN: this.sr_str.STR[0].AUTH_TOKEN,
            SESSION_ID: "",
            TRIP:this.t_type,
            SECTOR: "D",
            SRC: depApt,
            DES: arrApt,
            DEP_DATE: latest_date,
            RET_DATE: ret_latest_date,
            ADT: this.sr_str.STR[0].ADT,
            CHD: this.sr_str.STR[0].CHD,
            INF: this.sr_str.STR[0].INF,
            PC: this.sr_str.STR[0].PC,
            PF: this.sr_str.STR[0].PF,
            HS: "D"
          }
        ]
      }
      let js_data = JSON.stringify(data)
      console.log(js_data)
      this.tService.postTestData("http://stageapi.ksofttechnology.com/API/FLIGHT", js_data).subscribe((Flight) => {
        let size = Object.keys(Flight).length;
        if (size > 0) {
          let js_f = JSON.stringify(Flight)
          this.DismissClick()
          location.reload();
          sessionStorage.setItem("All_Flight", js_f)
          sessionStorage.setItem("srh_sctr", js_data)
        }
        else {

          this.DismissClick()
          this.present(2, depApt, arrApt)
        }
      })
    }
    else {
      alert("SAME SECTOR CAN'T BE SEARCH")
    }



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
}
