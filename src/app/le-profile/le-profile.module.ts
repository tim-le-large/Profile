import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeProfileComponent} from './le-profile.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';
import {ProjectsComponent} from './projects/projects.component';
import {LeProfileRoutingModule} from './le-profile-routing.module';
import {LeDashboardModule} from "../le-dashboard/le-dashboard.module";
import {NnComponent} from "./nn/nn.component";


@NgModule({
  declarations: [
    LeProfileComponent,
    NavigationComponent, ProfileComponent, ProjectsComponent, ContactComponent, NnComponent
  ],
  exports: [
    NnComponent
  ],
  imports: [
    CommonModule, AngularFullpageModule, FontAwesomeModule, LeProfileRoutingModule, LeDashboardModule,
  ]
})
export class LeProfileModule {

}
