import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'metodo-contraceptivo', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'objetivos', loadChildren: () => import('./pages/objetivos/objetivos.module').then( m => m.ObjetivosPageModule)},
  { path: 'opcoes', loadChildren: () => import('./pages/opcoes/opcoes.module').then( m => m.OpcoesPageModule)},
  { path: 'saude-vaginal', loadChildren: () => import('./pages/saude-vaginal/saude-vaginal.module').then( m => m.SaudeVaginalPageModule)},
  { path: 'saude-relacoes', loadChildren: () => import('./pages/saude-relacoes/saude-relacoes.module').then( m => m.SaudeRelacoesPageModule)},
  { path: 'higiene', loadChildren: () => import('./pages/higiene/higiene.module').then( m => m.HigienePageModule)},
  { path: 'higiene-dois', loadChildren: () => import('./pages/higiene-dois/higiene-dois.module').then( m => m.HigieneDoisPageModule)},
  { path: 'higiene-tres', loadChildren: () => import('./pages/higiene-tres/higiene-tres.module').then( m => m.HigieneTresPageModule)},
  { path: 'clico-menstrual', loadChildren: () => import('./pages/clico-menstrual/clico-menstrual.module').then( m => m.ClicoMenstrualPageModule)},
  { path: 'metodo-contraceptivo', loadChildren: () => import('./pages/metodo-contraceptivo/metodo-contraceptivo.module').then( m => m.MetodoContraceptivoPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
