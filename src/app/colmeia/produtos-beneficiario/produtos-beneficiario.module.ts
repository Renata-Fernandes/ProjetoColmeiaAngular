import { CommonModule } from "@angular/common";
import { NgModule, OnInit } from "@angular/core";
import { ProdutosBeneficiarioRouting } from "./produtos-beneficiario-routing.module";
import { ProdutosBeneficiarioComponent } from './produtos-beneficiario.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProdutoIdComponent } from "../produto-id/produto-id.component";



@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      ProdutosBeneficiarioRouting,
    ],
    exports: []
  })
  export class ProdutosBeneficiariodModule {}
    
   
  