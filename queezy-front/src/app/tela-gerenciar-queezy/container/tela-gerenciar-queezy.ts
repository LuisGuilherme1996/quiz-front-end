import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TelaGerenciarQueezyFacade } from '../tela-gerenciar-queezy.facade';
import { NotificacaoService } from 'src/app/helpers/notificacao-service/notificacao.service';

@Component({
  selector: 'app-tela-gerenciar-queezy',
  templateUrl: './tela-gerenciar-queezy.html',
  styleUrls: ['./tela-gerenciar-queezy.css'],
})
export class TelaGerenciarQueezyComponent implements OnInit {
    public queezyForm: FormGroup
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private facade: TelaGerenciarQueezyFacade,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.iniciarForm()
  }

  public iniciarForm(){
    this.queezyForm = this.fb.group({
      question: [''],
      name: [''],
      answers: this.fb.array([]),
    })
    this.adicionarResposta()
  }
  get answers() {
    return this.queezyForm.get('answers') as FormArray
  }

  public voltarTela(){
    this.router.navigate(['/home'])
  }

  public adicionarControls(){
    return this.fb.group({
      answer: [''],
      answers_correct: [false]
    })

  }

  public adicionarResposta(){
    const resposta = this.queezyForm.get('answers') as FormArray
    resposta.push(this.adicionarControls())
  }

  public async enviarQuestion(){
    const id_user = JSON.parse(localStorage.getItem('user')).id_user
    const response = await this.facade.salvarQuestions({...this.queezyForm.value, id_user: id_user})
    if(response.data){
      this.router.navigate(['/gerenciar-queezy'])
      this.notificacaoService.sucesso(response.mensagem)
      this.limparControl()
    }else{
      this.notificacaoService.erro('Ocorreu algum erro interno')
    }
  }

  limparControl(){
    this.queezyForm.reset();
    (this.queezyForm.get('answers') as FormArray).clear()
  }
}


