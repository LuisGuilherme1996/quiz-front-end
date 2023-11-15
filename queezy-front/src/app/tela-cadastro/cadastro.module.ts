import { NgModule } from "@angular/core";
import { TelaCadastroComponent } from "./cadastro";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: '', component: TelaCadastroComponent
    }
]
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(route)
    ],
    declarations: [TelaCadastroComponent],
    exports: []
})

export class TelaCadastroModule {}