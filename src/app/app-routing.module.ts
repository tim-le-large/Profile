import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeDashboardComponent } from './le-dashboard/le-dashboard.component';
import { LeProfileComponent } from './le-profile/le-profile.component';
import { LeStartpageComponent } from './le-startpage/le-startpage.component';

const routes: Routes = [
  { path: 'le-dashboard', component: LeDashboardComponent },
  { path: 'le-startpage', component: LeStartpageComponent },
  { path: '', component: LeProfileComponent },
  { path: 'le-profile', component: LeProfileComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
