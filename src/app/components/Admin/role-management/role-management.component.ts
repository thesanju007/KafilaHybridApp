import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../Services/test.service'
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddRoleModalComponent } from '../add-role-modal/add-role-modal.component'
@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent implements OnInit {
  constructor(private tService: TestService, public loadingController: LoadingController, public modalController: ModalController) { }
  menu
  tabShow = false
  login_Details
  ngOnInit() {
    let Json_LD = sessionStorage.getItem("LoginDetails")
    this.login_Details = JSON.parse(Json_LD)
  }
  roles() {
    let a = {
      "P_TYPE": "CC",
      "R_TYPE": "MGMT",
      "R_NAME": "GET_CC_ROLE",
      "R_DATA": {},
      "AID": this.login_Details.AID,
      "MODULE": this.login_Details.MODULE,
      "IP": this.login_Details.IP,
      "TOKEN": this.login_Details.TOKEN,
      "ENV": "P",
      "Version": "1.0.0.0.0.0"
    }

    this.tService.postTestData(a).subscribe(result => {
      if (result.response !== null) {
        console.log(result)
      }
      console.log(a)

    })
    this.tService.getTestData("../../../assets/sideMenu.json").subscribe(result => {
      this.menu = result
      this.tabShow = true
    });
  }


  addSM(d) {
    this.presentModal(d.Group_ID)
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
      component: AddRoleModalComponent,
      componentProps: {
        "paramID": x,
      },
      cssClass: 'role_Modal',
    });
    modal.onDidDismiss()
      .then((d) => {
        let obj = {
          "P_TYPE": "CC",
          "R_TYPE": "MGMT",
          "R_NAME": "UPDATE_CC_ROLE",
          "R_DATA": [
            {
              "Group_ID": "1", "active": "false", "title": "Admin", "icon": "person-circle-outline", "showDetails": "false", "subMenu": [

              ]
            },
            {
              "Group_ID": "2", "active": "false", "title": "Accounts", "icon": "cash-outline", "showDetails": "false", "subMenu": [

              ]
            },
            {
              "Group_ID": "3", "active": "false", "title": "Sales", "icon": "analytics-outline", "showDetails": "false", "subMenu": [

              ]
            },
            {
              "Group_ID": "4", "title": "Flight", "active": "false", "icon": "airplane-outline", "showDetails": "false", "subMenu": [

              ]
            },
            {
              "Group_ID": "5", "title": "Rail", "active": "true", "icon": "train-outline", "showDetails": "false", "subMenu": [
                { "sid": "1", "title": "Agent_List  ", "url": "RlAgentList", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "2", "title": " Agent_Authorization ", "url": "RlAgentAuthorization ", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "3", "title": " Agency_Statement ", "url": "RlAgencyStatement", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "4", "title": "Booking_History", "url": "RlBookingHistory", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "5", "title": "Cancellation_History", "url": "RlCancellationHistory", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "6", "title": "Cancellation_Otp_History", "url": "RlCancelOtpHistory", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "7", "title": " Failed_History ", "url": "RlFailedHistory", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "8", "title": "Pending_History", "url": "RlPendingHistory", "icon": "return-right", "Eicon": "chevron-forward" },
                { "sid": "9", "title": " Refund_History", "url": "RlRefundHistory", "icon": "return-right", "Eicon": "chevron-forward" }
              ]
            },
            {
              "Group_ID": "6", "title": "Miscellaneous", "active": "false", "icon": "extension-puzzle-outline", "showDetails": "false", "subMenu": [

              ]
            }
          ],
          "AID": this.login_Details.AID,
          "MODULE": this.login_Details.MODULE,
          "IP": this.login_Details.IP,
          "TOKEN": this.login_Details.TOKEN,
          "ENV": "P",
          "Version": "1.0.0.0.0.0"
        }
        if (d.data.gid == "1") {
          obj.R_DATA[0].subMenu.push(d.data.obj)

          this.hitAddSm(obj)

        }
        else if (d.data.gid == "2") {
          obj.R_DATA[1].subMenu.push(d.data.obj)
          this.hitAddSm(obj)
        }
        else if (d.data.gid == "3") {
          obj.R_DATA[2].subMenu.push(d.data.obj)
          this.hitAddSm(obj)
        }
        else if (d.data.gid == "4") {
          obj.R_DATA[3].subMenu.push(d.data.obj)
          this.hitAddSm(obj)
        }
        else if (d.data.gid == "5") {
          obj.R_DATA[4].subMenu.push(d.data.obj)
          this.hitAddSm(obj)
        }
        else {
          obj.R_DATA[5].subMenu.push(d.data.obj)
          this.hitAddSm(obj)
        }

      });
    return modal.present();
  }


  hitAddSm(aobj) {
    console.log(aobj)
    // this.tService.postTestData(aobj).subscribe(result => {
    //   if (result.response !== null) {
    //     console.log(result)
    //   }
    // })

    this.roles()
  }
}
