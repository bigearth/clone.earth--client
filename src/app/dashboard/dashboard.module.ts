/**
 * Created by matth on 6/6/2017.
 */


import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LoginModule} from "../login/login.module";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    LoginModule,
  ],
})
export class DashboardModule{}
