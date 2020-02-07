import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeVaginalDoisPage } from './saude-vaginal-dois.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeVaginalDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeVaginalDoisPageRoutingModule {}
