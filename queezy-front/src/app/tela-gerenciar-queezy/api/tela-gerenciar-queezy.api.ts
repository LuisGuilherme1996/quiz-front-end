import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { QueezyQuestion, QuestionResponse } from "../model/tela-gerenciar-queezy.model";

@Injectable({
    providedIn: 'root'
})

export class TelaGerenciarQueezyApi {
    constructor(
        private http: HttpClient
    ){}
    enviarQuestion(dados: QueezyQuestion){
        return this.http.post<QuestionResponse>(`http://localhost:4000/queezy/api/question`, dados)
    }
}