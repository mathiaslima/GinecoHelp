import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeVaginalPage } from './saude-vaginal.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeVaginalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeVaginalPageRoutingModule {}
