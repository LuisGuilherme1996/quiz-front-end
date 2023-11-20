import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, UserResponse } from "../model/tela-gerenciar-usuario.model";

@Injectable({
    providedIn: 'root'
})

export class TelaGerenciarUsuarioApi {
    constructor(
        private http: HttpClient
    ){}
    updateUser(user: User) {
        return this.http.patch<UserResponse>(`http://localhost:4000/queezy/api/queezy/user/${user.id_user}`,user)
    }
}