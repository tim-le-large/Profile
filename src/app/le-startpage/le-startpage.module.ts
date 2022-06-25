import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeStartpageRoutingModule} from './le-startpage-routing.module';
import {LeStartpageComponent} from './le-startpage.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProfileComponent} from './profile/profile.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {LeProfileModule} from "../le-profile/le-profile.module";


@NgModule({
  declarations: [
    LeStartpageComponent, ProfileComponent, NavigationComponent
  ],
  imports: [
    CommonModule,
    LeStartpageRoutingModule, FontAwesomeModule, AngularFullpageModule, LeProfileModule
  ]
})
export class LeStartpageModule {
}
