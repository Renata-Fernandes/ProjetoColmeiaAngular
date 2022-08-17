import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './colmeia/cadastro/cadastro.component';
import { HomeComponent } from './colmeia/home/home.component';
import { ProdutosBeneficiarioComponent } from './colmeia/produtos-beneficiario/produtos-beneficiario.component';
import { LoginBeneficiarioComponent } from './login-beneficiario/login-beneficiario.component';
import { SobreComponent } from './colmeia/sobre/sobre.component';
import { CategoriaComponent } from './colmeia/categoria/categoria.component';
import { ProdutoIdComponent } from './colmeia/produto-id/produto-id.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'produtos-beneficiarios', component: ProdutosBeneficiarioComponent},
  { path: 'login-beneficiario', component: LoginBeneficiarioComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'categoria', component: CategoriaComponent},
  { path: 'categoria-id', component: ProdutoIdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
