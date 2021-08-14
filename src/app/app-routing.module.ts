import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../app/Secutity/authentication.guard'
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
    path: '**',
    redirectTo: '/error'
  },
  {
    path: 'error',
    loadChildren: () => import('./Allpages/error/error.module').then(m => m.ErrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
