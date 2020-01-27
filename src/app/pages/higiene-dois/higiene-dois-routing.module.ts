import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HigieneDoisPage } from './higiene-dois.page';

const routes: Routes = [
  {
    path: '',
    component: HigieneDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HigieneDoisPageRoutingModule {}
