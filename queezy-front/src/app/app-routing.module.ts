import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
     loadChildren: () => import('./tela-game/tela-game.module').then(m => m.TelaGameModule)
  },
  {
    path: 'home',
     loadChildren: () => import('./tela-inicio/tela-inicio.module').then(m => m.TelaInicioModule)
  },
  {
    path: 'login',
     loadChildren: () => import('./login/modal-login/modal.module').then(m => m.ModalModule)
  },
  {
    path: 'cadastro',
      loadChildren: () => import('./tela-cadastro/cadastro.module').then(m => m.TelaCadastroModule) 
  },
  {
    path: 'conta-usuario',
      loadChildren: () => import('./tela-gerenciar-usuario/tela-gerenciar-usuario.module').then(m => m.TelaGerenciarUsuarioModule)
  },
  {
    path: 'gerenciar-queezy',
      loadChildren: () => import('./tela-gerenciar-queezy/tela-gerenciar-queezy.module').then(m => m.TelaGerenciarQueezyModule)
  },
  {
    path: 'final-queezy',
      loadChildren: () => import('./tela-ganhou-perdeu/tela-ganhou-perdeu.module').then(m => m.TelaGanhouPerdeuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
