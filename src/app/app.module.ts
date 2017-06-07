import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule, MdButtonModule, MdTabsModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MhPicModule } from './mh/pic/mh-pic.module';
import 'hammerjs';
import {LoginModule} from "./login/login.module";
import {ROUTES} from "./app.route";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./+dashboard/dashboard.module";
import {LandingModule} from "./+landing/landing.module";
import {IsAuthenticated} from "./login/is-authenticated.resolve";
import { UserModule } from './+user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdTabsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MhPicModule,
    LoginModule,
    DashboardModule,
    UserModule,
    LandingModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [IsAuthenticated],
  bootstrap: [AppComponent],
})
export class AppModule {
}
