import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeDashboardRoutingModule } from './le-dashboard-routing.module';
import { LeDashboardComponent } from './le-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardgridComponent } from './cardgrid/cardgrid.component';
import { AppModule } from '../app.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    LeDashboardComponent,
    DashboardComponent,
    CardgridComponent, NavigationComponent
  ],
  exports: [
    CardgridComponent
  ],
  imports: [
    CommonModule,
    LeDashboardRoutingModule,
    FontAwesomeModule, AngularFullpageModule
  ]
})
export class LeDashboardModule { }
