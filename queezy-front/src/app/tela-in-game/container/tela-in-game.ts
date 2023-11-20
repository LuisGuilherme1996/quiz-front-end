import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteService } from "src/app/services/service.route";
import { TelaInGameFacade } from "../tela-in-game.facade";
import { QuestionByUser } from "../model/tela-in-game.model";

@Component({
    selector: 'app-tela-in-game',
    templateUrl: './tela-in-game.html',
    styleUrls: ['./tela-in-game.css']
})

export class TelaInGameComponent implements OnInit {
    public userName: string
    public user: QuestionByUser
    public game: any
    public currentQuestionIndex = 0
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private routeService: RouteService,
        private facade: TelaInGameFacade
    ) {}

    ngOnInit(): void {
      this.routeService.getData().subscribe((data) => {
        this.userName = data.name
        this.user = data
      })
      this.listagemQuestionByUser()
    }

    public voltarTela(){
        this.router.navigate(['/game'])
    }

    public async listagemQuestionByUser(){
        const response = await this.facade.listarQuestions(this.user.user_id)
        this.game = response
        console.log(this.game,'game')
    }

    public async  enviarResposta(resposta: any){
        const respostaCorreta = await this.facade.verificaRespostaCorreta(resposta)
        if(respostaCorreta){
            this.currentQuestionIndex++
            if(this.currentQuestionIndex >= this.game.length){
                this.currentQuestionIndex = 0
            }
        }else{
            this.currentQuestionIndex = 0
        }
    }
}

