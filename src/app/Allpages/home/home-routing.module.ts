import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AgentAuthorizationComponent } from "../../components/Train/rl-Agent-authorization/agent-authorization.component";
import { BookingHistoryComponent } from "../../components/Train/rl-Booking-history/booking-history.component";
import { CancellationHistoryComponent } from "../../components/Train/rl-Cancellation-history/cancellation-history.component";
import { PendingHistoryComponent } from "../../components/Train/rl-Pending-history/pending-history.component";
import { RLAgentListComponent } from "../../components/Train/rl-Agent-list/rlagent-list.component";
import { RLRefundHistoryComponent } from "../../components/Train/rl-Refund-history/rlrefund-history.component";
import { RlfailedHistoryComponent } from '../../components/Train/rl-Failed-history/rlfailed-history.component'
import { RlagencyStatementComponent } from '../../components/Train/rl-Agency-statement/rlagency-statement.component'
import { RlCancelOtpHistoryComponent } from '../../components/Train/rl-Cancel-Otp-History/rl-cancel-otp-history.component'
import {RoleManagementComponent} from '../../components/Admin/role-management/role-management.component'
import {RlLogComponent} from'../../components/Developer/rl-log/rl-log.component'
import{AgencyProfileComponent} from '../../components/Flight/agency-profile/agency-profile.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../Allpages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: "RlAgentAuthorization ",
        component: AgentAuthorizationComponent
      }
      ,
      {
        path: 'RlBookingHistory',
        component: BookingHistoryComponent
      }
      ,
      {
        path: 'RlCancellationHistory',
        component: CancellationHistoryComponent
      }
      ,
      {
        path: 'RlPendingHistory',
        component: PendingHistoryComponent
      }
      ,
      {
        path: 'RlAgentList',
        component: RLAgentListComponent
      }
      ,
      {
        path: 'RlRefundHistory',
        component: RLRefundHistoryComponent
      },
      {
        path: 'RlFailedHistory',
        component: RlfailedHistoryComponent
      },
      {
        path: 'RlAgencyStatement',
        component: RlagencyStatementComponent
      },
      {
        path: 'RlCancelOtpHistory',
        component: RlCancelOtpHistoryComponent
      }
      ,{
        path:'RoleManagement',
        component:RoleManagementComponent
      },
      {
        path:'RlLog',
        component:RlLogComponent
      },
      {
        path:'AgencyProfile',
        component:AgencyProfileComponent
      }
      
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
