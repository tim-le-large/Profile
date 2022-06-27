import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeHomeRoutingModule} from './le-home-routing.module';
import {LeHomeComponent} from './le-home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {LeProfileModule} from "../le-profile/le-profile.module";


@NgModule({
  declarations: [
    LeHomeComponent, HomeComponent, NavigationComponent
  ],
  imports: [
    CommonModule,
    LeHomeRoutingModule, FontAwesomeModule, AngularFullpageModule, LeProfileModule
  ]
})
export class LeHomeModule {
}
