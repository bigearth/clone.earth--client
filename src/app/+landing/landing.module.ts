import {NgModule} from '@angular/core';
import {LandingComponent} from './landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdMenuModule, MdButtonModule, MdTabsModule, MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MhPicModule} from '../mh/pic/mh-pic.module';
import {LoginModule} from "../login/login.module";

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdTabsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MhPicModule,
    LoginModule,
  ]
})
export class LandingModule {
}
