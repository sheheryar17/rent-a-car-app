import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';
import { CarInfoPage } from './home/car-info/car-info.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomePage},
  { path: 'home/:_id', component: CarInfoPage },
  { path: 'car-info', component: CarInfoPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
