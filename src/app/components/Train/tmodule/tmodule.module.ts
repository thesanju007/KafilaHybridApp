import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormShareModule } from '../../../form-share/form-share.module';
import { RLAgentListComponent } from '../rlagent-list/rlagent-list.component'
import { AgentAuthorizationComponent } from '../agent-authorization/agent-authorization.component'
import { BookingHistoryComponent } from '../booking-history/booking-history.component'
import { CancellationHistoryComponent } from '../cancellation-history/cancellation-history.component'
import { PendingHistoryComponent } from '../pending-history/pending-history.component'
import { RLRefundHistoryComponent } from '../rlrefund-history/rlrefund-history.component'
@NgModule({
  declarations: [RLAgentListComponent, AgentAuthorizationComponent, BookingHistoryComponent, CancellationHistoryComponent, PendingHistoryComponent, RLRefundHistoryComponent],
  imports: [
    CommonModule, FormShareModule
  ],
  exports: [RLAgentListComponent, AgentAuthorizationComponent, BookingHistoryComponent, CancellationHistoryComponent, PendingHistoryComponent, RLRefundHistoryComponent]
})
export class TmoduleModule { }
