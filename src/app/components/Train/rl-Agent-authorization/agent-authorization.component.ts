import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../Services/test.service'
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { RlAuthModalComponent } from '../rl-Auth-modal/rl-auth-modal.component'
@Component({
  selector: 'app-agent-authorization',
  templateUrl: './agent-authorization.component.html',
  styleUrls: ['./agent-authorization.component.scss'],
})

export class AgentAuthorizationComponent implements OnInit {
  private sub: Subscription;
  constructor(private tService: TestService, public loadingController: LoadingController, public modalController: ModalController) {
    this.unsubscribe = new Subject<any>();
  }
  login_Details
  unsubscribe: Subject<any>;
  agtList
  lth
  tabShow = false
  amt = 0
  dog=false
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  dateDis = true
  agtId() {
    this.dateDis = false
    this.agtLstGP.reset()
    this.btn = true
  }
  none() {
    this.dateDis = true
    this.agtLstGP.reset()
  }

  btn = false
  btnActive() {
    this.btn = false
  }
  booleanValue = false
  evv = "p"
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
    RAID: new FormControl('', [Validators.pattern("[0-9]")]),
  })
  AgtSrhBtn(e) {
    this.present()

    this.tabShow = false
    let aBal = {
      "P_TYPE": "CC",
      "R_TYPE": "RAIL",
      "R_NAME": "RL_AGENT_BALANCE",
      "R_DATA": {
        "RAID": this.agtLstGP.value.RAID || "",
      },
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }
    this.sub = this.tService.postTestData(aBal).subscribe(result => {
      if (result.response.length > 2) {
        this.agtList = JSON.parse(result.response)
        
        this.dismiss()
        this.tabShow = true
        this.dog=false
        this.amt = 0
        for (let x of this.agtList) {
          this.amt += parseInt(x.BALANCE)
        }
      }
      else {
        this.dog=true
        this.dismiss()
      }
    });
  }
  // pageOfItems: Array<any>;
  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }
 
  up = false
  down = true
  up1 = false
  down1 = true
  up2 = false
  down2 = true
  up3 = false
  down3 = true
  up4 = false
  down4 = true




  sortBalAsc() {
    this.down = false
    this.up = true
    return this.agtList.sort((a, b) => {
      return a.BALANCE - b.BALANCE;
    });
  }

  sortBalDesc() {
    this.down = true
    this.up = false
    return this.agtList.sort((a, b) => {
      return b.BALANCE - a.BALANCE;
    });
  }

  sortMailAsc() {
    this.down1 = false
    this.up1 = true
    return this.agtList.sort((a, b) => {
      return a.EMAIL.localeCompare(b.EMAIL);
    })
  }

  sortMailDesc() {
    this.down1 = true
    this.up1 = false
    return this.agtList.sort((a, b) => {
      return b.EMAIL.localeCompare(a.EMAIL);
    })
  }

  sortDateAsc() {
    this.down2 = false
    this.up2 = true
    return this.agtList.sort((a, b) => {
      return <any>new Date(a.ETIME) - <any>new Date(b.ETIME);
    });
  }

  sortDateDesc() {
    this.down2 = true
    this.up2 = false
    return this.agtList.sort((a, b) => {
      return <any>new Date(b.ETIME) - <any>new Date(a.ETIME);
    });
  }

  sortCnameAsc() {
    this.down3 = false
    this.up3 = true
    return this.agtList.sort((a, b) => {
      return a.COMP_NAME.localeCompare(b.COMP_NAME);
    })
  }

  sortCnameDesc() {

    this.down3 = true
    this.up3 = false
    return this.agtList.sort((a, b) => {
      return b.COMP_NAME.localeCompare(a.COMP_NAME);
    })
  }
  sortAscRailId() {

    this.down4 = false
    this.up4 = true
    return this.agtList.sort((a, b) => {
      let e = b.RAIL_ID.slice(7)
      let f = a.RAIL_ID.slice(7)
      return e - f
    });
  }
  sortDescscRailId() {
    this.down4 = true
    this.up4 = false
    return this.agtList.sort((a, b) => {
      let e = b.RAIL_ID.slice(7)
      let f = a.RAIL_ID.slice(7)
      return f - e
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

  async presentModal(x) {
    const modal = await this.modalController.create({
      component: RlAuthModalComponent,
      componentProps: {
        "paramID": x,
      },
      cssClass: 'auth_modal',
    });
    modal.onDidDismiss()
    .then((d) => {
      if(d.data.obj!==""){
        console.log(d.data.obj)
      }
      
    })
    return modal.present();
  }


  edit(obj) {
   
    this.presentModal(obj)
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
