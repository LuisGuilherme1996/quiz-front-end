import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginFacade } from "../login.facade";
import { LoginModel } from "../model/login.model";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { NotificacaoService } from "src/app/helpers/notificacao-service/notificacao.service";
import { RouteService } from "src/app/services/service.route";

@Component({
    selector: 'modal-login',
    templateUrl: './modal-login.html',
    styleUrls: ['./modal-login.css']
})

export class ModalLoginComponent implements OnInit {
    public icon_visible: boolean = false;
    public loginForm: FormGroup
    public logado: boolean = false;
    constructor(
        private router: Router,
        private facade: LoginFacade,
        private fb: FormBuilder,
        private notificacaoService: NotificacaoService,
        private routeService: RouteService
    ) { }

    ngOnInit(): void {
        this.iniciarForm()
    }

    iniciarForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    public mudarTela() {
        this.router.navigate(['/home']);
    }

    public togglePasswordVisibility() {
        var passwordField = document.getElementById('password-field') as HTMLInputElement;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.icon_visible = true;
        } else {
            passwordField.type = "password";
            this.icon_visible = false;
        }
    }

    public async authenticaUser(event: Event) {
        event.preventDefault()
        const auth = await this.facade.login(this.loginForm.value)
        if(auth){
            this.notificacaoService.sucesso('Login efetuado com sucesso')
            const usuario = localStorage.setItem('user', JSON.stringify(auth))
            this.verificarUsuarioLogado(usuario)
            this.router.navigate(['/home'])
        }else{
            this.notificacaoService.erro(`Usuário ou senha inválidos!`)
        }
    }

    public verificarUsuarioLogado(usuario: any){
        const user = JSON.parse(localStorage.getItem('user'))
        const usuarioLogado = !!user
        this.logado = usuarioLogado
        this.routeService.setData(this.logado)
    }

}