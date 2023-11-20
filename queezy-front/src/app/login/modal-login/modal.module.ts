import { NgModule } from "@angular/core";
import { ModalLoginComponent } from "./modal-login";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotificacaoLoginComponent } from "../notificacao-login/notificacao";

const route: Routes = [
    {
        path: '',
        component: ModalLoginComponent
    }
]
@NgModule({
    declarations: [ModalLoginComponent, NotificacaoLoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [ModalLoginComponent]
})
export class ModalModule {}