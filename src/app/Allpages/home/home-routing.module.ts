import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('../../Allpages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'fsearch',
        loadChildren: () => import('../Flight/f-search/f-search.module').then( m => m.FSearchPageModule)
      },
      {
        path: 'fbookinghistory',
        loadChildren: () => import('../Flight/f-booking-history/f-booking-history.module').then( m => m.FBookingHistoryPageModule)
      },     
      {
        path: 'fcancellationhistory',
        loadChildren: () => import('../Flight/f-cancellation-history/f-cancellation-history.module').then( m => m.FCancellationHistoryPageModule)
      },
      {
        path: 'frefundhistory',
        loadChildren: () => import('../Flight/f-refund-history/f-refund-history.module').then( m => m.FRefundHistoryPageModule)
      },
      {
        path: 'fpaymenthistory',
        loadChildren: () => import('../Flight/f-payment-history/f-payment-history.module').then( m => m.FPaymentHistoryPageModule)
      },
      {
        path: 'ftransactions',
        loadChildren: () => import('../Flight/f-transactions/f-transactions.module').then( m => m.FTransactionsPageModule)
      },
      {
        path: 'tsearch',
        loadChildren: () => import('../Train/t-search/t-search.module').then( m => m.TSearchPageModule)
      },
      {
        path: 'tbookinghistory',
        loadChildren: () => import('../Train/t-booking-history/t-booking-history.module').then( m => m.TBookingHistoryPageModule)
      },
      {
        path: 'tcancellationhistory',
        loadChildren: () => import('../Train/t-cancellation-history/t-cancellation-history.module').then( m => m.TCancellationHistoryPageModule)
      },
      {
        path: 'trefundhistory',
        loadChildren: () => import('../Train/t-refund-history/t-refund-history.module').then( m => m.TRefundHistoryPageModule)
      },
      {
        path: 'tpaymenthistory',
        loadChildren: () => import('../Train/t-payment-history/t-payment-history.module').then( m => m.TPaymentHistoryPageModule)
      },
      {
        path: 'ttransactions',
        loadChildren: () => import('../Train/t-transactions/t-transactions.module').then( m => m.TTransactionsPageModule)
      },
      
      {
        path: 'hsearch',
        loadChildren: () => import('../Hotel/h-search/h-search.module').then( m => m.HSearchPageModule)
      },
      {
        path: 'hpaymenthistory',
        loadChildren: () => import('../Hotel/h-payment-history/h-payment-history.module').then( m => m.HPaymentHistoryPageModule)
      },
      {
        path: 'hrefundhistory',
        loadChildren: () => import('../Hotel/h-refund-history/h-refund-history.module').then( m => m.HRefundHistoryPageModule)
      },
      {
        path: 'hcancellationhistory',
        loadChildren: () => import('../Hotel/h-cancellation-history/h-cancellation-history.module').then( m => m.HCancellationHistoryPageModule)
      },
      {
        path: 'hbookinghistory',
        loadChildren: () => import('../Hotel/h-booking-history/h-booking-history.module').then( m => m.HBookingHistoryPageModule)
      },
      {
        path: 'htransactions',
        loadChildren: () => import('../Hotel/h-transactions/h-transactions.module').then( m => m.HTransactionsPageModule)
      },
      {
        path: 'myaccount',
        loadChildren: () => import('../my-account/my-account.module').then( m => m.MyAccountPageModule)
      },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
