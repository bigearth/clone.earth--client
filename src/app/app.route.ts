/**
 * Created by matth on 6/6/2017.
 */
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from "./landing/landing.component";
import { IsAuthenticated } from "./login/is-authenticated.resolve";

export const ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent,},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsAuthenticated],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
