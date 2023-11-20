import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TelaInGameComponent } from "./container/tela-in-game";

const route: Routes = [
    {
        path: '',
        component: TelaInGameComponent
    }
]
@NgModule({
    declarations: [TelaInGameComponent],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule, 
        RouterModule.forChild(route)
    ],
    exports: [TelaInGameComponent]
})

export class TelaInGameModule {}