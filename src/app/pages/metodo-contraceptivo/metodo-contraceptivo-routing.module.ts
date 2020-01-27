import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodoContraceptivoPage } from './metodo-contraceptivo.page';

const routes: Routes = [
  {
    path: '',
    component: MetodoContraceptivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodoContraceptivoPageRoutingModule {}
