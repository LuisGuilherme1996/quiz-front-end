import { Injectable, Inject, inject } from "@angular/core";
import { MatSnackBar, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar"; // Import MatSnackBar
import { ModalLoginComponent } from "src/app/login/modal-login/modal-login";
import { NotificacaoLoginComponent } from "src/app/login/notificacao-login/notificacao";

@Injectable({
    providedIn: 'root'
})

export class NotificacaoService {
    constructor(
         private snackBar: MatSnackBar
    ){}

    public sucesso(mensagem: string){
        this.snackBar.open(mensagem, '', {
            duration: 4000,
            panelClass: ['success'],
            horizontalPosition: 'end',
        })
    }

    public erro(mensagem: string){
        this.snackBar.open(mensagem, '', {
            duration: 3000,
            panelClass: ['error']
        })
    }
    public sucessoFromComponente(){
        this.snackBar.openFromComponent(NotificacaoLoginComponent, {duration: 4000})
    }
}