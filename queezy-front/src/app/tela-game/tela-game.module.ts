import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { TelaGameComponent } from "./container/tela-game.component";
import { NgZorroModule } from "src/ngZorro/ng-zorro.module";
import { TelaInGameModule } from "../tela-in-game/tela-in-game.module";
import { TelaInGameComponent } from "../tela-in-game/container/tela-in-game";
// import { NzButtonModule } from "ng-zorro-antd/button";


const router: Routes = [
    {
        path: '', component: TelaGameComponent
    },
    {
        path: 'in-game',
          loadChildren: () => import('../tela-in-game/tela-in-game.module').then(m => m.TelaInGameModule)
      }
]
@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(router),
        NgZorroModule

    ],
    declarations: [TelaGameComponent],
    exports: [TelaGameComponent]

})
export class TelaGameModule {}