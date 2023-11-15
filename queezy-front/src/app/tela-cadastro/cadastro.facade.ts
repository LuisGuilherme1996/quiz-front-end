import { Injectable } from '@angular/core';
import { CadastroApi } from './api/cadastro.api';
import { CadastroModel } from './model/cadastro.model';

@Injectable({
  providedIn: 'root',
})
export class CadastroFacade {
  constructor(private api: CadastroApi) {}

  public cadastrarUsuario(dados: CadastroModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.api.cadastrarConta(dados).subscribe((response) => {
        if(response.user){
            resolve(true)
        }else{
            resolve(false)
        }
      },
        (error) => {
            reject(error)
        }
      );
    });
  }
}
