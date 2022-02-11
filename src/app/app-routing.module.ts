import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Gaurd/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },

  {
    path: 'index',
    loadChildren: () => import('./Allpages/index/index.module').then(m => m.IndexPageModule)
  },
 
  {
    path: 'home',
    loadChildren: () => import('./Allpages/home/home.module').then(m => m.HomePageModule),canActivate:[AuthGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./Allpages/common/error/error.module').then(m => m.ErrorPageModule)
  },
 
  {
    path: 'header',
    loadChildren: () => import('./Allpages/common/header/header.module').then(m => m.HeaderPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./Allpages/common/about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./Allpages/common/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  { 
    path: '**', 
    redirectTo: '/error' 
  },
 
  






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
