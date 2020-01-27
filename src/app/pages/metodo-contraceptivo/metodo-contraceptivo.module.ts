import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoContraceptivoPageRoutingModule } from './metodo-contraceptivo-routing.module';

import { MetodoContraceptivoPage } from './metodo-contraceptivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoContraceptivoPageRoutingModule
  ],
  declarations: [MetodoContraceptivoPage]
})
export class MetodoContraceptivoPageModule {}
