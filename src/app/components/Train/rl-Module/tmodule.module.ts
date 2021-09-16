import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../../form-share/form-share.module';
import { RLAgentListComponent } from '../rl-Agent-list/rlagent-list.component'
import { AgentAuthorizationComponent } from '../rl-Agent-authorization/agent-authorization.component'
import { BookingHistoryComponent } from '../rl-Booking-history/booking-history.component'
import { CancellationHistoryComponent } from '../rl-Cancellation-history/cancellation-history.component'
import { PendingHistoryComponent } from '../rl-Pending-history/pending-history.component'
import { RLRefundHistoryComponent } from '../rl-Refund-history/rlrefund-history.component'
import { RlfailedHistoryComponent} from '../rl-Failed-history/rlfailed-history.component'
import { RlagencyStatementComponent} from '../rl-Agency-statement/rlagency-statement.component'
import { TicketComponent } from '../rl-Ticket/ticket.component'
import { CurrencyPipe } from '../../../Allpipes/currency.pipe'
import {RlCancelOtpHistoryComponent} from'../rl-Cancel-Otp-History/rl-cancel-otp-history.component'
import {RlAuthModalComponent} from '../rl-Auth-modal/rl-auth-modal.component'
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
    CurrencyPipe,
    RlCancelOtpHistoryComponent,
    RlAuthModalComponent
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
    RlagencyStatementComponent,
    RlCancelOtpHistoryComponent,
    RlAuthModalComponent
  ]
})
export class TmoduleModule { }
