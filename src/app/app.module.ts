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
    AreaDeAtuacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
