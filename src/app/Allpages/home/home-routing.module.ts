import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AgentAuthorizationComponent } from "../../components/Train/agent-authorization/agent-authorization.component";
import { BookingHistoryComponent } from "../../components/Train/booking-history/booking-history.component";
import { CancellationHistoryComponent } from "../../components/Train/cancellation-history/cancellation-history.component";
import { PendingHistoryComponent } from "../../components/Train/pending-history/pending-history.component";
import { RLAgentListComponent } from "../../components/Train/rlagent-list/rlagent-list.component";
import { RLRefundHistoryComponent } from "../../components/Train/rlrefund-history/rlrefund-history.component";
import { RlfailedHistoryComponent} from '../../components/Train/rlfailed-history/rlfailed-history.component'
import { RlagencyStatementComponent} from '../../components/Train/rlagency-statement/rlagency-statement.component'
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
      },
      {
        path: 'RLFailed',
        component: RlfailedHistoryComponent
      },
      {
        path: 'RLAgencyStatement',
        component: RlagencyStatementComponent
      },
      
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
