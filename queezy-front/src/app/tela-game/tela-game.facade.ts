import { Injectable } from '@angular/core';
import { TelaGameApi } from './api/tela-game.api';
import { Games } from './model/tela-game-model';

@Injectable({
  providedIn: 'root',
})
export class TelaGameFacade {
  constructor(private api: TelaGameApi) {}

  public listagemGames(): Promise<Games[]> {
    return new Promise((resolve, reject) => {
        this.api.listarGames().subscribe({
            next: (response) => {
                resolve(response.games);
            },
            error: (err) => {
                reject(err);
            }
        });
    });
}
}
