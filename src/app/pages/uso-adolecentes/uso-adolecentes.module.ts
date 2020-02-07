import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoAdolecentesPageRoutingModule } from './uso-adolecentes-routing.module';

import { UsoAdolecentesPage } from './uso-adolecentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoAdolecentesPageRoutingModule
  ],
  declarations: [UsoAdolecentesPage]
})
export class UsoAdolecentesPageModule {}
