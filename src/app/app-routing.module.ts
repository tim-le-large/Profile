import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeDashboardComponent} from './le-dashboard/le-dashboard.component';
import {LeProfileComponent} from './le-profile/le-profile.component';
import {LeHomeComponent} from './le-home/le-home.component';

const routes: Routes = [
  {path: 'le-dashboard', component: LeDashboardComponent},
  {path: 'le-home', component: LeHomeComponent},
  {path: '', component: LeProfileComponent},
  {path: 'le-profile', component: LeProfileComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
