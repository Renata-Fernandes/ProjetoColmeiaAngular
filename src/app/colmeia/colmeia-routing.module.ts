import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { NgChartsModule } from 'ng2-charts';
import { ClienteLogin } from '../model/ClienteLogin';
import { ColmeiaComponent } from './colmeia.component';
import { HomeComponent } from './home/home.component';
import { ProdutosBeneficiarioComponent } from './produtos-beneficiario/produtos-beneficiario.component';
import { CadastroBeneficiarioComponent } from './cadastro-beneficiario/cadastro-beneficiario.component';
import { SobreComponent } from '../sobre/sobre.component';
import { ProdutosBeneficiariodModule } from './produtos-beneficiario/produtos-beneficiario.module';

const routes: Routes = [
    {
        //aqui vai tudo que fica fixo ao menu e que precisa de rota ou que vai ser usado dentro dessa parte
        path:'', component: ColmeiaComponent, children:[
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'home', component: HomeComponent},
            {path:'produtos-beneficiario', loadChildren:()=> ProdutosBeneficiariodModule},
            {path:'cadastro-beneficiario', component: CadastroBeneficiarioComponent},
            {path:'sobre', component: SobreComponent},

        ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ColmeiaRoutingModule { }
