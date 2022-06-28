import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardgridComponent} from "./cardgrid/cardgrid.component";
import {NnComponent} from "./nn/nn.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FullpageComponent} from './fullpage/fullpage.component';
import {AngularFullpageModule} from "@fullpage/angular-fullpage";


@NgModule({
  declarations: [
    CardgridComponent,
    NnComponent,
    NavigationComponent,
    FullpageComponent,

  ],
  exports: [
    CardgridComponent,
    NnComponent,
    NavigationComponent,
    FullpageComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule, AngularFullpageModule
  ]
})
export class SharedModule {
}
