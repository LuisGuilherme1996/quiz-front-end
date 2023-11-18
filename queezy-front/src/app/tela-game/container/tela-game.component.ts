import { Component, OnInit } from '@angular/core';
import { Games } from '../model/tela-game-model';
import { Router } from '@angular/router';
import { TelaGameFacade } from '../tela-game.facade';

@Component({
  selector: 'app-tela-game',
  templateUrl: './tela-game.component.html',
  styleUrls: ['./tela-game.component.css']
})
export class TelaGameComponent implements OnInit{
  public games: Games[] = []
  constructor(
    private router: Router,
    private facade: TelaGameFacade
  ){}

  ngOnInit(): void {
    this.listarGames()
  }

  public voltarTela(){
    this.router.navigate(['home'])
  }

  public jogarGame(){
    this.router.navigate(['in-game'])
  }
  
  public async listarGames(){
    const response = await this.facade.listagemGames()

    this.games = response
    
  }

  public jogarQueezy(dados: Games){
    console.log(dados, `dados do queezy`)
  }
}
