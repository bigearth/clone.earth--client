import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule, MdButtonModule, MdTabsModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MhPicModule } from './mh/pic/mh-pic.module';
import 'hammerjs';

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
    MhPicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
