import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeHomeRoutingModule} from './le-home-routing.module';
import {LeHomeComponent} from './le-home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home/home.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LeHomeComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    LeHomeRoutingModule, FontAwesomeModule, AngularFullpageModule, SharedModule
  ]
})
export class LeHomeModule {
}
