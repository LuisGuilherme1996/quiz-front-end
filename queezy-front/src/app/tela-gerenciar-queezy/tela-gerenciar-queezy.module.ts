import { NgModule } from "@angular/core";
import { TelaGerenciarQueezyComponent } from "./container/tela-gerenciar-queezy";
import { TelaGerenciarQueezyApi } from "./api/tela-gerenciar-queezy.api";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: '', component: TelaGerenciarQueezyComponent
    }
]
@NgModule({
    declarations: [TelaGerenciarQueezyComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(route)],
    exports: [TelaGerenciarQueezyComponent],
    providers: [TelaGerenciarQueezyApi]
})

export class TelaGerenciarQueezyModule {}