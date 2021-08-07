import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './components/Train/ticket/ticket.component'
import { AuthenticationGuard } from '../app/Secutity/authentication.guard'
import { RLCHKBOOKINGIRCTCComponent } from '../app/components/Train/rl-chk-booking-irctc/rl-chk-booking-irctc.component'
import { RefundToAgentComponent } from '../app/components/Train/refund-to-agent/refund-to-agent.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'ccindex',
    pathMatch: 'full'
  },
  {
    path: 'ccindex',
    loadChildren: () => import('./Allpages/index/index.module').then(m => m.IndexPageModule)
  },

  {
    path: 'cchome',
    loadChildren: () => import('./Allpages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthenticationGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./Allpages/error/error.module').then(m => m.ErrorPageModule)
  },

  {
    path: 'header',
    loadChildren: () => import('./Allpages/header/header.module').then(m => m.HeaderPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./Allpages/footer/footer.module').then(m => m.FooterPageModule)
  },
  {
    path: 'RlTicket',
    component: TicketComponent
  },
  {
    path: 'rlchkbookingirctc',
    component: RLCHKBOOKINGIRCTCComponent
  }
  ,
  {
    path: 'refundtoagent',
    component: RefundToAgentComponent
  },
  {
    path: '**',
    redirectTo: '/error'
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
