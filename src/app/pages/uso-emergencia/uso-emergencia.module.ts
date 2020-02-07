import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoEmergenciaPageRoutingModule } from './uso-emergencia-routing.module';

import { UsoEmergenciaPage } from './uso-emergencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoEmergenciaPageRoutingModule
  ],
  declarations: [UsoEmergenciaPage]
})
export class UsoEmergenciaPageModule {}
