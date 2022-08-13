import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDoadorComponent } from './login-doador/login-doador.component';

const routes: Routes = [
  { path: 'login-doador', component:LoginDoadorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
