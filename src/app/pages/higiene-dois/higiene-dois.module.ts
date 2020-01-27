import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HigieneDoisPageRoutingModule } from './higiene-dois-routing.module';

import { HigieneDoisPage } from './higiene-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HigieneDoisPageRoutingModule
  ],
  declarations: [HigieneDoisPage]
})
export class HigieneDoisPageModule {}
