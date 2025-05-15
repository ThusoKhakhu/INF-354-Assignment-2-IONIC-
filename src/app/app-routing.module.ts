import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) }, // ✅ Lazy load LoginPage
  {path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) }, // ✅ Lazy load HomePage
  {path: 'weighloss', loadChildren: () => import('./Programs/Weight/weighloss/weighloss.module').then( m => m.WeighlossPageModule)},
  {path: 'muscle-gain', loadChildren: () => import('./Programs/Muscles/muscle-gain/muscle-gain.module').then( m => m.MuscleGainPageModule) },
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'progress/:id', loadChildren: () => import('./Programs/Progress/progress/progress.module').then( m => m.ProgressPageModule)},
  {path: 'sign-up', loadChildren: () => import('./SignUp/sign-up/sign-up.module').then( m => m.SignUpPageModule)},
// ✅ Default route to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ✅ Ensure forRoot() is used
  exports: [RouterModule] // ✅ Export RouterModule
})
export class AppRoutingModule {} // ✅ Correct module name