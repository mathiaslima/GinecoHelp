import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoAdolecentesPage } from './uso-adolecentes.page';

const routes: Routes = [
  {
    path: '',
    component: UsoAdolecentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoAdolecentesPageRoutingModule {}
