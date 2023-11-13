import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { TelaInicioComponent } from './container/tela-inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelaInicioQueezyComponent } from './components/tela-queezy/tela-inicio-queezy';
import { NgZorroModule } from 'src/ngZorro/ng-zorro.module';
import { ModalModule } from '../login/modal-login/modal.module';

const rotas: Routes = [
  {
    path: '', component: TelaInicioComponent,
      }
]

@NgModule({
    declarations: [
        TelaInicioComponent,
        TelaInicioQueezyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(rotas),
        NgZorroModule,
        ModalModule
    ],

    exports: [TelaInicioComponent, TelaInicioQueezyComponent]
})
export class TelaInicioModule { }
