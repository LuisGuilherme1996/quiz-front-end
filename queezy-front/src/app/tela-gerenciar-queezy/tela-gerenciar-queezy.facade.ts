import { Injectable } from "@angular/core";
import { TelaGerenciarQueezyApi } from "./api/tela-gerenciar-queezy.api";
import { QueezyQuestion, QuestionResponse } from "./model/tela-gerenciar-queezy.model";

@Injectable({
    providedIn: 'root'
})

export class TelaGerenciarQueezyFacade {
    constructor(
        private api: TelaGerenciarQueezyApi
    ){}

    public salvarQuestions(dados: QueezyQuestion): Promise<QuestionResponse>{
        return new Promise((resolve, reject) => {
            this.api.enviarQuestion(dados).subscribe({
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