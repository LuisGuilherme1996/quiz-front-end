import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Games } from "../model/tela-game-model";

@Injectable({
    providedIn: 'root'
})

export class TelaGameApi {
    constructor(
        private http: HttpClient
    ) {}

    public listarGames(){
        return this.http.get<Games>('http://localhost:4000/queezy/api/games')
    }
}