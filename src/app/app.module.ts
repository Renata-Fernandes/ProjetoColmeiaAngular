import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './colmeia/home/home.component';
import { FooterComponent } from './colmeia/footer/footer.component';
import { LoginBeneficiarioComponent } from './login-beneficiario/login-beneficiario.component';
import { LoginDoadorComponent } from './login-doador/login-doador.component';
import { SobreComponent } from './colmeia/sobre/sobre.component';
import { TermosComponent } from './termos/termos.component';
import { ContatoComponent } from './colmeia/contato/contato.component';
import { CadastreComponent } from './colmeia/cadastre/cadastre.component';
import { CadastroComponent } from './colmeia/cadastro/cadastro.component';
import { AreaDeAtuacaoComponent } from './colmeia/area-de-atuacao/area-de-atuacao.component';
import { BeneficiarioHomeComponent } from './colmeia/beneficiario-home/beneficiario-home.component';
import { ProdutosBeneficiarioComponent } from './colmeia/produtos-beneficiario/produtos-beneficiario.component';
import { ConfirmarProdutosComponent } from './colmeia/confirmar-produtos/confirmar-produtos.component';
import { SelecionarDatasComponent } from './colmeia/selecionar-datas/selecionar-datas.component';
import { ConfirmacaoAgendamentoComponent } from './colmeia/confirmacao-agendamento/confirmacao-agendamento.component';
import { HeaderUsuariosComponent } from './colmeia//header-usuarios/header-usuarios.component';
import { CadastroBeneficiarioComponent } from './colmeia/cadastro-beneficiario/cadastro-beneficiario.component';
import { CadastroDoadorComponent } from './colmeia/cadastro-doador/cadastro-doador.component';
import { CadastroCdComponent } from './colmeia/cadastro-cd/cadastro-cd.component';
import { ColmeiaComponent } from './colmeia/colmeia.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CadastreComponent,
    HomeComponent,
    FooterComponent,
    LoginBeneficiarioComponent,
    LoginDoadorComponent,
    SobreComponent,
    TermosComponent,
    ContatoComponent,
    CadastreComponent,
    AreaDeAtuacaoComponent,
    BeneficiarioHomeComponent,
    ConfirmarProdutosComponent,
    SelecionarDatasComponent,
    ConfirmacaoAgendamentoComponent,
    HeaderUsuariosComponent,
    CadastroBeneficiarioComponent,
    CadastroDoadorComponent,
    CadastroCdComponent,
    ProdutosBeneficiarioComponent,
    ColmeiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
