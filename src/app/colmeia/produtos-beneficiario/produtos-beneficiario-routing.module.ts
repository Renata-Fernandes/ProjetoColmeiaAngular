import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ProdutoIdComponent } from '../produto-id/produto-id.component';

const routes: Routes = [
    
  {path:'', component: ProdutoIdComponent, children:[

    {path: 'categoria', loadChildren:()=> CategoriaComponent}]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProdutosBeneficiarioRouting { }
