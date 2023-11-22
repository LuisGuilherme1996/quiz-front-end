import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/service.route';

@Component({
  selector: 'app-tela-ganhou-perdeu',
  templateUrl: './tela-ganhou-perdeu.html',
  styleUrls: ['./tela-ganhou-perdeu.css'],
})
export class TelaGanhouPerdeuComponent implements OnInit {
  public venceuOGame: boolean;
  constructor(public routerService: RouteService, private router: Router) {}

  ngOnInit(): void {
    this.routerService.getData().subscribe((data) => {
      this.venceuOGame = data.venceuOGame;
    });
  }

  public voltarTela(){
    this.router.navigate(['game'])
  }
}
