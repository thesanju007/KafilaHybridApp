import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
 
  {
    path: '',
    component: DashboardPage,
    // children:[
     
    //   {
    //     path: 'fsearch',
    //     loadChildren: () => import('../Flight/f-search/f-search.module').then( m => m.FSearchPageModule)
    //   },
    //   {
    //     path: 'tsearch',
    //     loadChildren: () => import('../Train/t-search/t-search.module').then( m => m.TSearchPageModule)
    //   },
    //   {
    //     path: 'hsearch',
    //     loadChildren: () => import('../Hotel/h-search/h-search.module').then( m => m.HSearchPageModule)
    //   },

    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
