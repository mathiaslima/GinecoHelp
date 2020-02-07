import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoEmergenciaPage } from './uso-emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: UsoEmergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoEmergenciaPageRoutingModule {}
