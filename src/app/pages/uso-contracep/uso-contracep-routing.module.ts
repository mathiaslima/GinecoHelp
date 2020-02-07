import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoContracepPage } from './uso-contracep.page';

const routes: Routes = [
  {
    path: '',
    component: UsoContracepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoContracepPageRoutingModule {}
