import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { AlertPopoverComponent } from '../../../components/alert-popover/alert-popover.component';
import { Router } from '@angular/router';
import { GetService } from 'src/app/Services/get.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-f-show-flight',
  templateUrl: './f-show-flight.page.html',
  styleUrls: ['./f-show-flight.page.scss'],
})
export class FShowFlightPage implements OnInit {

  panelOpenState = false;

  all_dates = [];
  srh_flt = false
  constructor(
    private route: Router,
    private fb: FormBuilder,
    public popoverController: PopoverController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public datepipe: DatePipe,
    private get_Service: GetService,
    private post_service: PostService
  ) { }
  f_all_data: any
  arr_data: any
  arr_data1: any
  t_type = "0"
  data = false
  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  maxDate: any
  public STOPS = [
    { val: '0', Name: 'Non Stop', isChecked: false },
    { val: '1', Name: '1 Stop', isChecked: false },
    { val: '2', Name: '2 Stop', isChecked: false }
  ];
  public DEP_TIME = [
    { val1: '0', val2: '6', isChecked: false },
    { val1: '6', val2: '12', isChecked: false },
    { val1: '12', val2: '18', isChecked: false },
    { val1: '18', val2: '24', isChecked: false }
  ];
  public ARR_TIME = [
    { val1: '00', val2: '06', isChecked: false },
    { val1: '06', val2: '12', isChecked: false },
    { val1: '12', val2: '18', isChecked: false },
    { val1: '18', val2: '24', isChecked: false }
  ];
  public Come_FLIGHTS = [];
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
    this.Token = sessionStorage.getItem("Token")
    this.get_Service.GET("../../../assets/airport.json").subscribe(result => {
      // console.log(result)
      this.arp = result
      this.arp_new = result
    });

    let cnrt_f_data = sessionStorage.getItem("All_Flight")
    if (cnrt_f_data !== "") {
      this.data = true

      this.f_all_data = JSON.parse(cnrt_f_data)
      this.sr_str = this.f_all_data.Param
      this.arr_data = this.f_all_data.Schedules[0]
      this.arr_data1 = this.f_all_data.Schedules[1]
      this.t_type = this.sr_str.Trip

      let r2 = this.arr_data.sort((n1: any, n2: any) => n2.Fare.GrandTotal - n1.Fare.GrandTotal)
      for (let d of r2) {
        this.min_amt = Math.min(d.Fare.GrandTotal)
      }
      let r = this.arr_data.sort((n1: any, n2: any) => n1.Fare.GrandTotal - n2.Fare.GrandTotal)
      for (let d of r) {
        this.max_amt = Math.max(d.Fare.GrandTotal)
      }


      let uniqueObjects = [...new Map(this.f_all_data.Schedules[0].map(item => [item.Itinerary[0].FName, item])).values()]
      for (let x of uniqueObjects) {
        this.Come_FLIGHTS.push({ val: x, isChecked: false })
      }
    }


    this.flightData = this.fb.group({
      flighttype: new FormControl(this.sr_str.Trip),
      D_airport: new FormControl(this.sr_str.Sector[0].Src, [Validators.required]),
      A_airport: new FormControl(this.sr_str.Sector[0].Des, [Validators.required]),
      D_date: new FormControl(this.sr_str.Sector[0].DDate, [Validators.required]),
      A_date: new FormControl(''),
      PClass: new FormControl(''),
      PFlight: new FormControl(''),
      Adults: new FormControl(''),
      Childs: new FormControl(''),
      Infants: new FormControl(''),
    })
    this.flightData.get('flighttype').setValue(this.sr_str.Trip);
  }


  round_trip = false
  checkValue(t) {
    if (t.value == 2) {
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
    if (this.a == g) {
      this.stops = !this.stops
    }
    if(this.a !== g){
      this.stops = this.stops
    }


  }
  sortBalAsc() {
    this.down1 = false
    this.up1 = true
    return this.arr_data.sort((a, b) => {
      return a.Fare.GrandTotal - b.Fare.GrandTotal;
    });
  }
  sortBalDesc() {
    this.down1 = true
    this.up1 = false
    return this.arr_data.sort((a, b) => {
      return b.Fare.GrandTotal - a.Fare.GrandTotal;
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

  Token: any











  d_Adult = "1";
  d_Child = "0";
  d_Infants = "0";


  trip_val: any = 0

  checkFlight() {

    let depApt = this.flightData.value.D_airport.substring(0, 3);
    let arrApt = this.flightData.value.A_airport.substring(0, 3);
    if (depApt != arrApt) {
      this.present(1, depApt, arrApt)
      let latest_date = this.datepipe.transform(this.flightData.value.D_date, 'yyyy-MM-dd');
      let ret_latest_date = this.datepipe.transform(this.flightData.value.A_date, 'yyyy-MM-dd');
      let data = {
        "Trip": 0 || this.trip_val,
        "Adt": 2 || this.flightData.value.Adults || this.d_Adult,
        "Chd": 2 || this.flightData.value.Childs || this.d_Child,
        "Inf": 2 || this.flightData.value.Infants || this.d_Infants,
        "Sector": [
          {
            "Src": depApt,
            "Des": arrApt,
            "DDate": latest_date
          }
        ],
        "PF": this.flightData.value.PFlight || "",
        "PC": this.flightData.value.PClass || "",
        "Routing": "Direct",
        "Ver": "1.0.0.0",
        "Auth": {
          "AgentId": "18785869",
          "Token": "XXXXXXX" || this.Token
        },
        "Env": 0,
        "Module": "B2B",
        "OtherInfo": {
          "PromoCode": "KAF2022",
          "TraceId": "a1ab2cc5-e483-4d79-8fa2-69f46f124f60"
        }
      }
      let js_data = JSON.stringify(data)
      console.log(js_data)
      // this.post_service.POST(" ", js_data).subscribe((Flight) => {
      //   let size = Object.keys(Flight).length;
      //   if (size > 0) {
      //     let js_f = JSON.stringify(Flight)
      //     this.DismissClick()
      //     location.reload();
      //     sessionStorage.setItem("All_Flight", js_f)
      //     sessionStorage.setItem("srh_sctr", js_data)
      //   }
      //   else {

      //     this.DismissClick()
      //     this.present(2, depApt, arrApt)
      //   }
      // })
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

  nextpage() {
    this.route.navigate(['home/fpax'])
  }


  myOnChangeSlider(event) {
    this.arr_data = this.f_all_data.Schedules[0].filter((d: { Fare: { GrandTotal: number; }; }) => d.Fare.GrandTotal <= event.detail.value)
  }

  stop_filter(event) {
    if (event.isChecked === true) {
      this.arr_data = this.f_all_data.Schedules[0].filter((d) => d.Stop == event.val)
    }
    else {
      this.arr_data = this.f_all_data.Schedules[0]
    }

  }

  dep_time_filter(event) {
    if (event.isChecked == true) {
      this.arr_data = this.f_all_data.Schedules[0].filter((d: { Itinerary: { DDate: string; }[]; }) =>
        parseInt(d.Itinerary[0].DDate.split('T')[1].split(':')[0]) >= parseInt(event.val1) && parseInt(d.Itinerary[0].DDate.split('T')[1].split(':')[0]) <= parseInt(event.val2)
      )
    }
    else {
      this.arr_data = this.f_all_data.Schedules[0]
    }
  }

  arr_time_filter(event) {
    if (event.isChecked == true) {
      this.arr_data = this.f_all_data.Schedules[0].filter((d: { Itinerary: { ADate: string; }[]; }) =>
        parseInt(d.Itinerary[0].ADate.split('T')[1].split(':')[0]) >= parseInt(event.val1) && parseInt(d.Itinerary[0].ADate.split('T')[1].split(':')[0]) <= parseInt(event.val2)
      )
    }
    else {
      this.arr_data = this.f_all_data.Schedules[0]
    }
  }

  flt_name_filter(val, chk) {
    if (chk == true) {
      this.arr_data = this.f_all_data.Schedules[0].filter((d) => d.Itinerary[0].FName == val)
    }
    else {
      this.arr_data = this.f_all_data.Schedules[0]
    }
  }

  side_div = false


  side_div_active() {

    if (this.side_div == true) {
      this.side_div = false
    }
    else {
      this.side_div = true
    }

  }

  clicked(n: any) {
    console.log(n)
  }


}
