import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelaInicioModule } from './tela-inicio/tela-inicio.module';
import { Router, RouterModule } from '@angular/router';
import { TelaGameComponent } from './tela-game/container/tela-game.component';
import { NgZorroModule } from 'src/ngZorro/ng-zorro.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaGameModule } from './tela-game/tela-game.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ModalModule } from './login/modal-login/modal.module';
import { TelaInGameModule } from './tela-in-game/tela-in-game.module';
import { RouteService } from './services/service.route';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificacaoService } from './helpers/notificacao-service/notificacao.service';


// registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TelaInicioModule,
    NgZorroModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule,
    TelaGameModule,
    NzButtonModule,
    ModalModule,
    TelaInGameModule,
    MatSnackBarModule
    
  ],
  providers: [
    RouteService,
    NotificacaoService

  ],
  // providers: [
  //   { provide: NZ_I18N, useValue: pt_BR }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
