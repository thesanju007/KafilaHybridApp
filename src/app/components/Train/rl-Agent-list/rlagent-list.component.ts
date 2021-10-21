import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import {RlCertificateModalComponent} from '../rl-Certificate-Modal/rl-certificate-modal.component'
@Component({
  selector: 'app-rlagent-list',
  templateUrl: './rlagent-list.component.html',
  styleUrls: ['./rlagent-list.component.scss'],
})
export class RLAgentListComponent implements OnInit {
  maxDate = new Date(new Date().getTime()).toISOString().split('T')[0];
  constructor(private tService: TestService, public loadingController: LoadingController, public modalController: ModalController) { this.unsubscribe = new Subject<any>(); }
  login_Details
  tabShow = false
  subscription: Subscription
  agtList
  unsubscribe: Subject<any>;
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
    this.der()
  }
  dateDis = true
  aidDis = false
  AgentActive() {
    this.dateDis = false
    this.aidDis = true
    // this.agtLstGP.reset()
    this.btn=true
  }
  DateActive() {
    this.aidDis = false
    this.dateDis = false
    this.agtLstGP.reset()
    this.btn=true
  }
  None() {
    this.dateDis = true
    this.aidDis = false
    this.agtLstGP.reset()
    this.btn=false
  }

  btn=false
  btnActive() {
   this.btn=false
  }
  booleanValue = false
  evv="p"
  toggle() {
    this.booleanValue = !this.booleanValue
    if (this.booleanValue == true) {
      this.evv = "D"
    }
    else {
      this.evv = "P"
    }
  }
 
  agtLstGP = new FormGroup({
    RAID: new FormControl(),
    FROM: new FormControl(),
    TO: new FormControl(),
  })
  
  AgtSrhBtn(e) {
    this.present()
    e.preventDefault();
    this.tabShow=false
    let agtList = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_AGENT_LIST",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
        "FROM": this.agtLstGP.value.FROM || "",
        "TO": this.agtLstGP.value.TO || ""
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV":"P",
      "Version": "1.0.0.0.0.0"
    }
    this.subscription = this.tService.postTestData( agtList).subscribe(result => {
      if (result.response.length>2) {
        this.dismiss()
        this.tabShow = true
        this.agtList = JSON.parse(result.response)
        // console.log(this.agtList)
      }
      else{
        alert("No Data Found")
        this.dismiss()
      }

    });
  }

  pageOfItems: Array<any>;
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  up=false
  down=true
  up1=false
  down1=true
  up2=false
  down2=true
  up3=false
  down3=true
  sortCnameAsc() {
    this.down=false
    this.up=true
    return this.pageOfItems.sort((a, b) => {
      return a.COMP_NAME.localeCompare(b.COMP_NAME);
    })
  }
  sortCnameDesc() {
    this.down=true
    this.up=false
    return this.pageOfItems.sort((a, b) => {
      return b.COMP_NAME.localeCompare(a.COMP_NAME);
    })
  }
  sortMailAsc() {
    this.down1=false
    this.up1=true
    return this.pageOfItems.sort((a, b) => {
      return a.EMAIL.localeCompare(b.EMAIL);
    })
  }
  sortMailDesc() {
    this.down1=true
    this.up1=false
    return this.pageOfItems.sort((a, b) => {
      return b.EMAIL.localeCompare(a.EMAIL);
    })
  }
  sortDateAsc() {
    this.down2=false
    this.up2=true
    return this.pageOfItems.sort((a, b) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }
  sortDateDesc() {
    this.down2=true
    this.up2=false
    return this.pageOfItems.sort((a, b) => {
      return <any>new Date(b.ETIME) - <any>new Date(a.ETIME);
    });
  }
  sortAscRailId() {
    
    this.down3 = false
    this.up3 = true
    return this.pageOfItems.sort((a, b) => {
     let e= b.RAIL_ID.slice(7)
     let f= a.RAIL_ID.slice(7)
      return e-f
    });
  }
  sortDescscRailId() {
    this.down3 = true
    this.up3 = false
    return this.pageOfItems.sort((a, b) => {
      let e= b.RAIL_ID.slice(7)
      let f= a.RAIL_ID.slice(7)
       return f-e
     });
  }
  isLoading = false;
  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Loading',
      mode: 'ios',
      backdropDismiss: false,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        console.log('');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log());
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log());
  }
  send_certificate(d){
    this.presentModal(d)
  }


  async presentModal(d) {
    const modal = await this.modalController.create({
      component: RlCertificateModalComponent,
      cssClass: 'certificate',
      showBackdrop: true,
      componentProps: {
        "paramID": d,
      }
    });
    return await modal.present();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  x=0
  y:any
  z:any
  der(){
    if(this.x==0){
      this.y="N/A"
      this.z="N/A"
    }
    else{
      this.y=this.x*.02
      this.z=this.y*.05
    }
  }
  

  
  
}
