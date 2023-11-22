import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CadastroFacade } from "./cadastro.facade";

@Component({
    selector: 'app-tela-cadastro',
    templateUrl: './cadastro.html',
    styleUrls: ['./cadastro.css']
})

export class TelaCadastroComponent implements OnInit {
    public cadastroForm: FormGroup;
    public logou: boolean = false;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private facade: CadastroFacade
    ) {}

    ngOnInit(): void {
        this.iniciarFormulario()
    }

    public voltarTela(){
        this.router.navigate(['/home'])
    }

    public cadastrarConta(){
      const logou  =  this.facade.cadastrarUsuario(this.cadastroForm.value)
      logou.then(res => {
        if(res == true){
        this.router.navigate(['/login'])


        }else return
      })
    }

    public iniciarFormulario(){
        this.cadastroForm = this.fb.group({
         name: ['', [Validators.required]],
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required]   
        }
        )
    }
}