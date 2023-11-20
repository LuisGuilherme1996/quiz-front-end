import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../model/login.model";

@Injectable({
    providedIn: 'root'
})

export class LoginApi {
    constructor(
        private http: HttpClient
    ){}

    public auth(dados: LoginModel){
        return this.http.post('http://localhost:4000/auth/api/auth-login', dados)
    }
}