import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TelaGanhouPerdeuComponent } from "./container/tela-ganhou-perdeu";
const route: Routes = [
    {
        path: '', component: TelaGanhouPerdeuComponent
    }
]
@NgModule({
    declarations: [TelaGanhouPerdeuComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(route)
    ],
    exports: []
})

export class TelaGanhouPerdeuModule {}
