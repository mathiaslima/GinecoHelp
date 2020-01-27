import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClicoMenstrualPage } from './clico-menstrual.page';

const routes: Routes = [
  {
    path: '',
    component: ClicoMenstrualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClicoMenstrualPageRoutingModule {}
