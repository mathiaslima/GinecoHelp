import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeRelacoesPage } from './saude-relacoes.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeRelacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeRelacoesPageRoutingModule {}
