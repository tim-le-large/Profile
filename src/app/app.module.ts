import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LeDashboardModule} from './le-dashboard/le-dashboard.module';
import {LeProfileModule} from './le-profile/le-profile.module';
import {LeStartpageModule} from './le-startpage/le-startpage.module';


@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LeProfileModule,
    LeDashboardModule,
    LeStartpageModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
