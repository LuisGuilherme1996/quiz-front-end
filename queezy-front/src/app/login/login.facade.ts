import { Injectable } from "@angular/core";
import { LoginApi } from "./api/login.api";
import { LoginModel } from "./model/login.model";

@Injectable({
    providedIn: 'root' 
})

export class LoginFacade {
    constructor(
        private api: LoginApi
    ){}

    public  login(dados: LoginModel): Promise<LoginModel>{
        return new Promise((resolve, reject) => {
            this.api.auth(dados)
            .subscribe({
                next: (response: LoginModel) => {
                    resolve(response.user)
                },
                error: (error: any) => {
                    reject(error)
                }
            })
        })
    }
}