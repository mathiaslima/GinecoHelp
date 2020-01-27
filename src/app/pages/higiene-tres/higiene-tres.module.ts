import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HigieneTresPageRoutingModule } from './higiene-tres-routing.module';

import { HigieneTresPage } from './higiene-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HigieneTresPageRoutingModule
  ],
  declarations: [HigieneTresPage]
})
export class HigieneTresPageModule {}
