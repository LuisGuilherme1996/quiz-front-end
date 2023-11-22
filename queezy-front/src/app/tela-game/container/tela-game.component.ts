import { Component, OnInit, ViewChild } from '@angular/core';
import { Games } from '../model/tela-game-model';
import { Router } from '@angular/router';
import { TelaGameFacade } from '../tela-game.facade';
import { TelaInGameComponent } from 'src/app/tela-in-game/container/tela-in-game';
import { RouteService } from 'src/app/services/service.route';

@Component({
  selector: 'app-tela-game',
  templateUrl: './tela-game.component.html',
  styleUrls: ['./tela-game.component.css']
})
export class TelaGameComponent implements OnInit{
  public games: Games[] = []
  constructor(
    private router: Router,
    private facade: TelaGameFacade,
    private routeService: RouteService
  ){}

  @ViewChild('telaInGame') telaInGame: TelaInGameComponent

  ngOnInit(): void {
    this.listarGames()
  }

  public voltarTela(){
    this.router.navigate(['home'])
  }

  public jogarGame(){
  }
  
  public async listarGames(){
    const response = await this.facade.listagemGames()
    
    this.games = response
    
  }
  
  public jogarQueezy(dados: Games){
    this.routeService.setData(dados)
    this.router.navigate(['in-game'])
  }
}
