import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBeneficiarioComponent } from './login-beneficiario/login-beneficiario.component';
import { LoginDoadorComponent } from './login-doador/login-doador.component';
import { SobreComponent } from './sobre/sobre.component';
import { TermosComponent } from './termos/termos.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastreComponent } from './cadastre/cadastre.component';
import { AreaDeAtuacaoComponent } from './area-de-atuacao/area-de-atuacao.component';
import { BeneficiarioHomeComponent } from './beneficiario-home/beneficiario-home.component';
import { ProdutosBeneficiarioComponent } from './produtos-beneficiario/produtos-beneficiario.component';
import { ConfirmarProdutosComponent } from './confirmar-produtos/confirmar-produtos.component';
import { SelecionarDatasComponent } from './selecionar-datas/selecionar-datas.component';
import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento/confirmacao-agendamento.component';
import { HeaderUsuariosComponent } from './header-usuarios/header-usuarios.component';
import { CadastroBeneficiarioComponent } from './cadastro-beneficiario/cadastro-beneficiario.component';
import { CadastroDoadorComponent } from './cadastro-doador/cadastro-doador.component';
import { CadastroCdComponent } from './cadastro-cd/cadastro-cd.component';
import { ColmeiaComponent } from './colmeia/colmeia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginBeneficiarioComponent,
    LoginDoadorComponent,
    SobreComponent,
    TermosComponent,
    ContatoComponent,
    CadastreComponent,
    AreaDeAtuacaoComponent,
    BeneficiarioHomeComponent,
    ProdutosBeneficiarioComponent,
    ConfirmarProdutosComponent,
    SelecionarDatasComponent,
    ConfirmacaoAgendamentoComponent,
    HeaderUsuariosComponent,
    CadastroBeneficiarioComponent,
    CadastroDoadorComponent,
    CadastroCdComponent,
    ColmeiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
