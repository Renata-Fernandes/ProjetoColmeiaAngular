import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutosBeneficiarioRouting } from "./produtos-beneficiario-routing.module";
import { ProdutosBeneficiarioComponent } from './produtos-beneficiario.component';



@NgModule({
    declarations: [
        ProdutosBeneficiarioComponent,
   
    ],
    imports: [
      CommonModule,
      ProdutosBeneficiarioRouting,
    ],
    exports: [
        ProdutosBeneficiarioComponent,
    ]
  })
  export class ProdutosBeneficiariodModule { }
  