import { Component, EventEmitter, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalLoginComponent } from "src/app/login/modal-login/modal-login";
import { RouteService } from "src/app/services/service.route";

@Component({
    selector: 'app-tela-queezy',
    templateUrl: './tela-inicio-queezy.html',
    styleUrls: ['./tela-inicio-queezy.css']
})

export class TelaInicioQueezyComponent implements OnInit,OnDestroy {
    // @ViewChild('modalLogin') modalLogin: TemplateRef<ModalLoginComponent>;
    @Output() abrirModalLogin = new EventEmitter()
    public usuarioLogado: boolean = false;
    constructor(
        private router: Router,
        private modalService: NgbModal,
        private routeService: RouteService
    ){}
    @Output() abrirTabela = new EventEmitter() 
    ngOnInit(): void {
       this.verificarUsuarioLogado()
    }
    ngOnDestroy(): void {
        
    }

    private verificarUsuarioLogado(){
        const logado = !!JSON.parse(localStorage.getItem('user'))
        this.usuarioLogado = logado  
    }

    public sairDaConta(){
        localStorage.removeItem('user')
        this.usuarioLogado = false
        this.router.navigate(['/login'])
    }
 
}