import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoContracepPageRoutingModule } from './uso-contracep-routing.module';

import { UsoContracepPage } from './uso-contracep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoContracepPageRoutingModule
  ],
  declarations: [UsoContracepPage]
})
export class UsoContracepPageModule {}
