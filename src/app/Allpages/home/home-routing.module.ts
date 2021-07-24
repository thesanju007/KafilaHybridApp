import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { PaymentComponent } from '../../components/payment/payment.component'
import { AgentAuthorizationComponent } from "../../components/Train/agent-authorization/agent-authorization.component";
import { BookingHistoryComponent } from "../../components/Train/booking-history/booking-history.component";
import { CancellationHistoryComponent } from "../../components/Train/cancellation-history/cancellation-history.component";
import { PendingHistoryComponent } from "../../components/Train/pending-history/pending-history.component";
import { RLAgentListComponent } from "../../components/Train/rlagent-list/rlagent-list.component";
import { RLRefundHistoryComponent } from "../../components/Train/rlrefund-history/rlrefund-history.component";
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
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'RLAgentAuth',
        component: AgentAuthorizationComponent
      }
      ,
      {
        path: 'RlBookingHistory',
        component: BookingHistoryComponent
      }
      ,
      {
        path: 'RLCancel',
        component: CancellationHistoryComponent
      }
      ,
      {
        path: 'RLPending',
        component: PendingHistoryComponent
      }
      ,
      {
        path: 'RLAgent',
        component: RLAgentListComponent
      }
      ,
      {
        path: 'RLRefund',
        component: RLRefundHistoryComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
