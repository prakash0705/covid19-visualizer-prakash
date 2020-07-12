import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatewisedataComponent} from 'src/app/statewisedata/statewisedata.component'
import {DistrictwiseComponent} from 'src/app/districtwise/districtwise.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
const routes: Routes = [
  {
    path:"state",
    component:StatewisedataComponent,
    canActivate: [AuthGuard]

  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"district",
    component:DistrictwiseComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"register",
    component:RegisterComponent,
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard/state",
    component:StatewisedataComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
