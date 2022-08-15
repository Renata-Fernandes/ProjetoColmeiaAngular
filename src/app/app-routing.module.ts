import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './colmeia/home/home.component';
import { ProdutosBeneficiarioComponent } from './colmeia/produtos-beneficiario/produtos-beneficiario.component';
import { LoginBeneficiarioComponent } from './login-beneficiario/login-beneficiario.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'produtos-beneficiarios', component: ProdutosBeneficiarioComponent},
  { path: 'login-beneficiario', component: LoginBeneficiarioComponent},
  { path: 'sobre', component: SobreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
