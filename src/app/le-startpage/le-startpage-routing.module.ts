import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeStartpageComponent } from './le-startpage.component';

const routes: Routes = [{ path: '', component: LeStartpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeStartpageRoutingModule { }
