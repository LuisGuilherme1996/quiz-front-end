import { Component, OnInit } from '@angular/core';
import { Games } from './model/tela-game-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-game',
  templateUrl: './tela-game.component.html',
  styleUrls: ['./tela-game.component.css']
})
export class TelaGameComponent implements OnInit{
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {}

  public voltarTela(){
    this.router.navigate(['home'])
  }

  public jogarGame(){
    this.router.navigate(['in-game'])
  }
  
}
