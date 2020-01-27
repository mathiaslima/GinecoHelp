import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeRelacoesPageRoutingModule } from './saude-relacoes-routing.module';

import { SaudeRelacoesPage } from './saude-relacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeRelacoesPageRoutingModule
  ],
  declarations: [SaudeRelacoesPage]
})
export class SaudeRelacoesPageModule {}
