import { NgModule } from "@angular/core";
import { TelaGerenciarUsuarioComponent } from "./container/tela-gerenciar-usuario";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Route, Router, RouterModule, Routes } from "@angular/router";
import { TelaGerenciarUsuarioApi } from "./api/tela-gerenciar-usuario.api";
import { TelaGerenciarUsuarioFacade } from "./tela-gerenciar-usuario.facade";

const route: Routes = [
    {
        path: '', component: TelaGerenciarUsuarioComponent
    }
]
@NgModule({
    declarations: [TelaGerenciarUsuarioComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(route)],
    exports: [],
    providers: [TelaGerenciarUsuarioApi, TelaGerenciarUsuarioFacade]
})

export class TelaGerenciarUsuarioModule {}
