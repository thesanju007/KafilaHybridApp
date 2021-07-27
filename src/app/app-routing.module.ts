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
    path: 'cchome',
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
