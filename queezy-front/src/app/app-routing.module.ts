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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
