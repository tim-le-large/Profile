import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeHomeComponent} from './le-home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {LeProfileModule} from "../le-profile/le-profile.module";


@NgModule({
  declarations: [
    LeHomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, AngularFullpageModule, LeProfileModule
  ]
})
export class LeHomeModule {
}
