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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
