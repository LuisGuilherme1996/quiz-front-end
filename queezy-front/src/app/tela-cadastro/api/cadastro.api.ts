import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CadastroModel } from "../model/cadastro.model";
import { Observable } from "rxjs";

export interface ResponseApi {
    status: string;
    message: string;
}

export interface CadastroResponse extends ResponseApi {
    user: CadastroModel
}
@Injectable({
    providedIn: 'root'
})

export class CadastroApi {
    constructor(
        private http: HttpClient
    ) {}

    public cadastrarConta(dados: CadastroModel): Observable<CadastroResponse>{
        return this.http.post<CadastroResponse>('http://localhost:4000/queezy/api/queezy/cadastrar', dados)
    }
}