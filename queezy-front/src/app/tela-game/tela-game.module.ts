import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { TelaGameComponent } from "./container/tela-game.component";
import { NgZorroModule } from "src/ngZorro/ng-zorro.module";
// import { NzButtonModule } from "ng-zorro-antd/button";


const router: Routes = [
    {
        path: '', component: TelaGameComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(router),
        NgZorroModule
        // NzButtonModule

    ],
    declarations: [TelaGameComponent],
    exports: [TelaGameComponent]

})
export class TelaGameModule {}