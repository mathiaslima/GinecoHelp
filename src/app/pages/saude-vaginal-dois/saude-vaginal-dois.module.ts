import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeVaginalDoisPageRoutingModule } from './saude-vaginal-dois-routing.module';

import { SaudeVaginalDoisPage } from './saude-vaginal-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeVaginalDoisPageRoutingModule
  ],
  declarations: [SaudeVaginalDoisPage]
})
export class SaudeVaginalDoisPageModule {}
