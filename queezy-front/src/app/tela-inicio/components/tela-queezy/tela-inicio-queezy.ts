import { Component, EventEmitter, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalLoginComponent } from "src/app/login/modal-login/modal-login";

@Component({
    selector: 'app-tela-queezy',
    templateUrl: './tela-inicio-queezy.html',
    styleUrls: ['./tela-inicio-queezy.css']
})

export class TelaInicioQueezyComponent implements OnInit,OnDestroy {
    // @ViewChild('modalLogin') modalLogin: TemplateRef<ModalLoginComponent>;
    @Output() abrirModalLogin = new EventEmitter()
    constructor(
        private router: Router,
        private modalService: NgbModal
    ){}
    @Output() abrirTabela = new EventEmitter() 
    ngOnInit(): void {
        
    }
    ngOnDestroy(): void {
        
    }

    // public abrirModal(){
    //     this.modalService.open(this.modalLogin)
    //  }


 
}