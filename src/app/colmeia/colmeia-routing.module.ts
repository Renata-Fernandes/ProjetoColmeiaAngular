import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { NgChartsModule } from 'ng2-charts';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { ColmeiaComponent } from './colmeia.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { ProdutosBeneficiariodModule } from './produtos-beneficiario/produtos-beneficiario.module';
import { LoginBeneficiarioModule } from '../login-beneficiario/login-beneficiario.module';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
    {
        //aqui vai tudo que fica fixo ao menu e que precisa de rota ou que vai ser usado dentro dessa parte
        path:'', component: ColmeiaComponent, children:[
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'home', component: HomeComponent},
            {path:'produtos-beneficiario', loadChildren:()=> ProdutosBeneficiariodModule},
            {path:'login-beneficiario', loadChildren:()=> LoginBeneficiarioModule},
            {path:'sobre', loadChildren:()=>SobreComponent},
            {path: 'cadastro', loadChildren:()=> CadastroComponent}

        ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ColmeiaRoutingModule { }
