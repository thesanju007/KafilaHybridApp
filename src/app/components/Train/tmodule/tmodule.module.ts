import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../../form-share/form-share.module';
import { RLAgentListComponent } from '../rlagent-list/rlagent-list.component'
import { AgentAuthorizationComponent } from '../agent-authorization/agent-authorization.component'
import { BookingHistoryComponent } from '../booking-history/booking-history.component'
import { CancellationHistoryComponent } from '../cancellation-history/cancellation-history.component'
import { PendingHistoryComponent } from '../pending-history/pending-history.component'
import { RLRefundHistoryComponent } from '../rlrefund-history/rlrefund-history.component'
import { RlfailedHistoryComponent} from '../rlfailed-history/rlfailed-history.component'
import { RlagencyStatementComponent} from '../rlagency-statement/rlagency-statement.component'
import { TicketComponent } from '../ticket/ticket.component'
import { CurrencyPipe } from '../../../Allpipes/currency.pipe'
@NgModule({
  declarations: [
    RLAgentListComponent,
    AgentAuthorizationComponent,
    BookingHistoryComponent,
    CancellationHistoryComponent,
    PendingHistoryComponent,
    RLRefundHistoryComponent,
    TicketComponent,
    RlfailedHistoryComponent,
    RlagencyStatementComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    FormShareModule
  ],
  exports: [
    RLAgentListComponent,
    AgentAuthorizationComponent,
    BookingHistoryComponent,
    CancellationHistoryComponent,
    PendingHistoryComponent,
    RLRefundHistoryComponent,
    TicketComponent,
    RlfailedHistoryComponent,
    RlagencyStatementComponent
  ]
})
export class TmoduleModule { }
