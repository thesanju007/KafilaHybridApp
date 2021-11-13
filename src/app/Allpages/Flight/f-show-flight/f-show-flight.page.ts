import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-f-show-flight',
  templateUrl: './f-show-flight.page.html',
  styleUrls: ['./f-show-flight.page.scss'],
})
export class FShowFlightPage implements OnInit {

  constructor() { }
  f_all_data: any
  arr_data: any
  tripType="1"
  data=false
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
  ngOnInit() {
    let cnrt_f_data = sessionStorage.getItem("All_Flight")
    if(cnrt_f_data!==""){
      this.data=true
      this.f_all_data = JSON.parse(cnrt_f_data)
      this.arr_data = this.f_all_data.FLIGHT
  
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
   

  }
  stops:any
  a:any
  check(g: any) {
    this.a=g
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
}
