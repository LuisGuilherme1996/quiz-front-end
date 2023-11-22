import { Injectable } from "@angular/core";
import { TelaGerenciarUsuarioApi } from "./api/tela-gerenciar-usuario.api";
import { User, UserResponse } from "./model/tela-gerenciar-usuario.model";

@Injectable({
    providedIn: 'root'
})

export class TelaGerenciarUsuarioFacade {
    constructor(
        private api: TelaGerenciarUsuarioApi
    ){}

    public atualizarUsuario(user: User) : Promise<UserResponse>{
        return new Promise((resolve, reject) => {
            this.api.updateUser(user).subscribe({
                next: (response) => {
                    resolve(response)
                },
                error: (error) => {
                    reject(error)
                }
            })
        })
    }
}