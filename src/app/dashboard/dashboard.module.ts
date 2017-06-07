/**
 * Created by matth on 6/6/2017.
 */


import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LoginModule} from "../login/login.module";
import { MdButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    LoginModule,
    MdButtonModule,
  ],
})
export class DashboardModule{}
