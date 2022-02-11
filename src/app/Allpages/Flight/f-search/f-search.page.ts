import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { AlertPopoverComponent } from '../../../components/alert-popover/alert-popover.component';
import { GetService } from 'src/app/Services/get.service';
import { PostService } from 'src/app/Services/post.service';
@Component({
  selector: 'app-f-search',
  templateUrl: './f-search.page.html',
  styleUrls: ['./f-search.page.scss'],
})
export class FSearchPage implements OnInit {

  todayt = new Date(new Date().getTime()).toISOString().split('T')[0];
  minDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  maxDate: any
  arp: any
  arp_new: any
  selected_airport: any
  isAfterOW = true;
  isAfterRT = false;
  isAfterMT = false;
  isAfterRS = false;
  isAfterAT = false;
  flight_comp = true
  train_comp = false
  hotel_comp = false
  adult = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  childrens = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
  infants = ["0", "1", "2", "3", "4",]
  d_DepCity
  d_ArrCity
  f_Type = "1";
  t_Type = "1";
  d_Adult = "1";
  d_Child = "0";
  d_Infants = "0";

  F_class = [
    "First",
    "Bussiness",
    "Premium First",
    "Premium Ecomomy",
    "Ecomomy (Coach)"
  ]
  F_flights = [
    "All"
  ]
  Token: any
  constructor(private route: Router, private fb: FormBuilder, public popoverController: PopoverController,
    public toastController: ToastController,
    public loadingController: LoadingController, public datepipe: DatePipe, private get_Service: GetService, private post_service: PostService) { }
  ngOnInit() {
    this.get_Service.GET("../../../assets/airport.json").subscribe(result => {

      this.arp = result
      this.arp_new = result
    });
    this.gaugeTitleForm = this.fb.group({
      gaugeTitles: this.fb.array([this.createItem(), this.createItem()])
    });

    this.Token = sessionStorage.getItem("Token")

  }




  returnDate(d) {
    let latest_date = this.datepipe.transform(d, 'yyyy-MM-dd');

    this.minDate = latest_date
  }
  returnDateMax(d) {
    let latest_date = this.datepipe.transform(d, 'yyyy-MM-dd');
    this.maxDate = latest_date
  }

  slideOpts = {
    autoplay: true
  };

  // one_way = true
  round_trip = false
  multi_trip = true
  trip_val: any = 0
  R_Onw_Way() {
    this.trip_val = 0
    this.isAfterOW = true
    this.isAfterRT = false
    this.isAfterMT = false
    this.isAfterRS = false
    this.isAfterAT = false


    // this.one_way = true
    this.round_trip = false
    this.multi_trip = true

  }
  R_Round_Trip() {
    this.trip_val = 1
    this.isAfterOW = false
    this.isAfterRT = true
    this.isAfterMT = false
    this.isAfterRS = false
    this.isAfterAT = false

    // this.one_way = false
    this.round_trip = true
    this.multi_trip = true
  }

  R_Multi_Trip() {
    this.trip_val = 2
    this.isAfterOW = false
    this.isAfterRT = false
    this.isAfterMT = true
    this.isAfterRS = false
    this.isAfterAT = false

    // this.one_way = false
    this.round_trip = false
    this.multi_trip = false

  }

  R_Round_Special() {
    this.trip_val = 3
    this.isAfterOW = false
    this.isAfterRT = false
    this.isAfterMT = false
    this.isAfterRS = true
    this.isAfterAT = false

    // this.one_way = false
    this.round_trip = true
    this.multi_trip = true
  }

  R_Advance_Trip() {
    this.trip_val = 4
    this.isAfterOW = false
    this.isAfterRT = false
    this.isAfterMT = false
    this.isAfterRS = false
    this.isAfterAT = true

    // this.one_way = false
    this.round_trip = true
    this.multi_trip = true
  }


  showw = false
  showwR = false
  searcharp
  s: any;
  // showArpList() {
  //   this.showw = true
  // }
  // airValue(arpt) {
  //   this.d_DepCity = arpt.code + " , " + arpt.city + " , " + arpt.country
  //   this.showw = false
  //   this.removeAirport(arpt.code)
  // }
  // removeAirport(arrApt) {

  //   if (arrApt !== "") {
  //     let depApt1 = arrApt.substring(0, 3);
  //     this.d_DepCity = depApt1
  //     console.log(depApt1)
  //     this.arp_new = this.arp.filter(Array => Array.code !== depApt1);
  //   }

  // }
  // search(val: any) {
  //   this.s = val.target.value;

  // }

  //Return Airport
  r
  // searchRet(val: any) {
  //   this.r = val.target.value;
  // }
  // showArpListRet() {
  //   this.showwR = true
  // }

  // airValueRet(arpt) {
  //   this.d_ArrCity = arpt.code + " , " + arpt.city + " , " + arpt.country
  //   this.showwR = false
  //   this.removeAirportDep(arpt.code)
  // }

  // removeAirportDep(depApt) {
  //   let depApt1 = depApt.substring(0, 3);
  //   this.d_ArrCity = depApt1
  //   console.log(depApt1)
  //   // let arrApt = this.flightData.value.A_airport.substring(0, 3);
  //   this.arp = this.arp_new.filter(Array => Array.code !== depApt1);
  // }




  depARP = ""
  arrARP = ""

  swap_city() {
    console.log(this.depARP, this.arrARP)
    let t = this.depARP
    this.depARP = this.arrARP
    this.arrARP = t
  }





  flightData = this.fb.group({
    // flighttype: new FormControl(''),
    D_airport: new FormControl('', [Validators.required]),
    A_airport: new FormControl('', [Validators.required]),
    D_date: new FormControl(this.todayt, [Validators.required]),
    A_date: new FormControl(''),
    PClass: new FormControl(''),
    PFlight: new FormControl(''),
    Adults: new FormControl(''),
    Childs: new FormControl(''),
    Infants: new FormControl(''),
  })


  foods = 9


  checkFlight_one() {

    let depApt = this.flightData.value.D_airport.substring(0, 3);
    let arrApt = this.flightData.value.A_airport.substring(0, 3);
    if (depApt != arrApt) {
      // this.present(1, depApt, arrApt)
      let latest_date = this.datepipe.transform(this.flightData.value.D_date, 'yyyy-MM-dd');
      let ret_latest_date = this.datepipe.transform(this.flightData.value.A_date, 'yyyy-MM-dd');
      if (this.trip_val == 0) {
        let data = {
          "Trip": this.trip_val,
          "Adt": this.flightData.value.Adults || this.d_Adult,
          "Chd": this.flightData.value.Childs || this.d_Child,
          "Inf": this.flightData.value.Infants || this.d_Infants,
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
        console.log(data)
        this.get_Service.GET("../../../../assets/allJson/res.json").subscribe((Flight) => {
          console.log(Flight)
          let size = Object.keys(Flight).length;
          if (size > 0) {
            let js_f = JSON.stringify(Flight)
            this.DismissClick()
            this.route.navigate(['home/fshowflight'])
            sessionStorage.setItem("All_Flight", js_f)

          }
          else {

            this.DismissClick()
            this.present(2, depApt, arrApt)
          }
        })
      }
      if (this.trip_val == 1) {
        let data = {
          "Trip": this.trip_val,
          "Adt": this.flightData.value.Adults || this.d_Adult,
          "Chd": this.flightData.value.Childs || this.d_Child,
          "Inf": this.flightData.value.Infants || this.d_Infants,
          "Sector": [
            {
              "Src": depApt,
              "Des": arrApt,
              "DDate": latest_date
            }, {
              "Src": arrApt,
              "Des": depApt,
              "DDate": ret_latest_date
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
        console.log(data)
        this.get_Service.GET("../../../../assets/allJson/res_two.json").subscribe((Flight) => {
          console.log(Flight)
          let size = Object.keys(Flight).length;
          if (size > 0) {
            let js_f = JSON.stringify(Flight)
            this.DismissClick()
            this.route.navigate(['home/fshowflight'])
            sessionStorage.setItem("All_Flight", js_f)

          }
          else {

            this.DismissClick()
            this.present(2, depApt, arrApt)
          }
        })
      }
    }
    else {
      alert("SAME SECTOR CAN'T BE SEARCH")
    }



  }



















  // MULTI TRIP
  ind: any
  gaugeTitleForm: FormGroup;
  gaugeTitles: FormArray;


  createItem() {
    return this.fb.group({
      D_airport: new FormControl('', [Validators.required]),
      A_airport: new FormControl('', [Validators.required]),
      D_date: new FormControl(this.todayt, [Validators.required]),


    });
  }
  addItem(): void {
    this.gaugeTitles = this.gaugeTitleForm.get('gaugeTitles') as FormArray;
    if (this.gaugeTitles.length < 5) {
      this.gaugeTitles.push(this.createItem());
    }

    this.ind = this.gaugeTitles.length

  }
  removeRow(index) {



    (<FormArray>this.gaugeTitleForm.get("gaugeTitles")).removeAt(index);

    console.log(index)

  }
  onSubmit() {
    console.log(this.gaugeTitleForm.value)
  }



























  get Error() {
    return this.flightData.controls;
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
