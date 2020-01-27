import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeVaginalPageRoutingModule } from './saude-vaginal-routing.module';

import { SaudeVaginalPage } from './saude-vaginal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeVaginalPageRoutingModule
  ],
  declarations: [SaudeVaginalPage]
})
export class SaudeVaginalPageModule {}
