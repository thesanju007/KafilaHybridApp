import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    path: 'home',
    loadChildren: () => import('./Allpages/home/home.module').then(m => m.HomePageModule)
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
    path: 'aboutus',
    loadChildren: () => import('./Allpages/about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./Allpages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
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
