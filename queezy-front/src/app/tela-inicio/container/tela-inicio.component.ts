import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from 'src/app/login/modal-login/modal-login';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {
  constructor(
    private router: Router,
    private modalService: NgbModal
  ){}

  @ViewChild('modalLogin') modalLogin: TemplateRef<ModalLoginComponent>;

  ngOnInit(): void {
    
  }

  public abrirTabela(){
    console.log('clicou')
    this.router.navigate(['game'])
}
  public abrirModalLogin(){
    this.modalService.open(ModalLoginComponent)
  }
}
