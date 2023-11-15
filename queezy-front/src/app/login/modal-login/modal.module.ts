import { NgModule } from "@angular/core";
import { ModalLoginComponent } from "./modal-login";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: '',
        component: ModalLoginComponent
    }
]
@NgModule({
    declarations: [ModalLoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [ModalLoginComponent]
})
export class ModalModule {}