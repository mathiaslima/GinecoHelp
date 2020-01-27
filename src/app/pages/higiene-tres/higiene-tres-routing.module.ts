import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HigieneTresPage } from './higiene-tres.page';

const routes: Routes = [
  {
    path: '',
    component: HigieneTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HigieneTresPageRoutingModule {}
