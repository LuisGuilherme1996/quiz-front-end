import { Injectable } from "@angular/core";
import { TelaInGameApi } from "./api/tela-in-game.api";
import { TelaInGameResponse } from "./model/tela-in-game.model";

@Injectable({
    providedIn: 'root'
})

export class TelaInGameFacade {
    constructor(
        private api: TelaInGameApi
    ){}

    public listarQuestions(id_user: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.api.listarGameByUser(id_user)
                .subscribe({
                    next: (response: TelaInGameResponse) => {
                        resolve(response.userQuestion);
                    },
                    error: (error: any) => {
                        reject(error);
                    }
                });
        });
    }

    public verificaRespostaCorreta(answer: any){
        return new Promise((resolve, reject) => {
            this.api.respostaCorreta(answer).subscribe({
                next: (response: TelaInGameResponse) => {
                    resolve(response.isCorrect);
                },
                error: (error: any) => {
                    reject(error);
                }
            })
        })
    }
}