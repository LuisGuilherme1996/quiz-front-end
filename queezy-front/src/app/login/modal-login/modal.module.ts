import { NgModule } from "@angular/core";
import { ModalLoginComponent } from "./modal-login";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ModalLoginComponent],
    imports: [CommonModule],
    exports: [ModalLoginComponent]
})
export class ModalModule {}