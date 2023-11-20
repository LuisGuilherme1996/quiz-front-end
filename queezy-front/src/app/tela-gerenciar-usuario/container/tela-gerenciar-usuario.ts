import { Component, OnInit } from "@angular/core";
import { TelaGerenciarUsuarioFacade } from "../tela-gerenciar-usuario.facade";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificacaoService } from "src/app/helpers/notificacao-service/notificacao.service";

@Component({
    selector: 'app-tela-gerenciar-usuario',
    templateUrl: './tela-gerenciar-usuario.html',
    styleUrls: ['./tela-gerenciar-usuario.css'],
})

export class TelaGerenciarUsuarioComponent implements OnInit {
    public userForm: FormGroup
    constructor(
        private facade: TelaGerenciarUsuarioFacade,
				private fb: FormBuilder,
				private router: Router,
				private notificacaoService: NotificacaoService
    ) {}

    ngOnInit(): void {
			this.iniciarForm()
    }

  public iniciarForm(){
		this.userForm = this.fb.group({
			name: [null, [Validators.required]],
			email: [null, [Validators.required]],
			password: [null, [Validators.required]]
		})
	}
    public async salvarDadosUsuario(){
			const id_user = JSON.parse(localStorage.getItem('user')).id_user
        const response = await this.facade.atualizarUsuario({...this.userForm.value, id_user: id_user})
				if(response.user){
					this.notificacaoService.sucesso(response.mensagem)
					this.router.navigate(['/home'])
				}else{
					this.notificacaoService.erro('Os campos não podem ser vazios')
				}
    }

		public voltarTela(){
			this.router.navigate(['/home'])
		}
}
