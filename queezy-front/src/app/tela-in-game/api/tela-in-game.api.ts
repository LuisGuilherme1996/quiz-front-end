import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TelaInGameResponse } from "../model/tela-in-game.model";

@Injectable({
    providedIn: 'root'
})

export class TelaInGameApi {
    constructor(
        private http: HttpClient
    ){}

    public listarGameByUser(id_user: number){
        return this.http.get<TelaInGameResponse>(`http://localhost:4000/queezy/api/question/user/${id_user}`)
    }

    public respostaCorreta(answer: any){
        console.log(answer.id_answer, answer.question_id)
        return this.http.get<TelaInGameResponse>(`http://localhost:4000/queezy/api/check-question/${answer.id_answer}/${answer.question_id}`)
    }
}