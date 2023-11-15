import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-in-game',
    templateUrl: './tela-in-game.html',
    styleUrls: ['./tela-in-game.css']
})

export class TelaInGameComponent implements OnInit {
    constructor(
        private router: Router,
    ) {}

    ngOnInit(): void {}

    public voltarTela(){
        this.router.navigate(['/game'])
    }
}

