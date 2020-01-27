import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClicoMenstrualPageRoutingModule } from './clico-menstrual-routing.module';

import { ClicoMenstrualPage } from './clico-menstrual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClicoMenstrualPageRoutingModule
  ],
  declarations: [ClicoMenstrualPage]
})
export class ClicoMenstrualPageModule {}
