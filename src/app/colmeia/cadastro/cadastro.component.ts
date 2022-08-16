import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //public user: Usuario = new Usuario();
  public confirmaSenha!: string;
  public TipoUsuario!: string;
  usuario: Usuario={
    id:0,
    cpf: "",
    itens:[],
    nome:"",
    senha:"",
    tipoUsuario:"",
    usuario:""
  }
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,

  ) { }

  ngOnInit() {
    /* POSICIONA O SCROLL NO TOPO DA TELA */
    window.scroll(0, 0);

  }

  confirmarSenha(event:any){
    this.confirmaSenha= event.target.value;

  }

  tipoUsuario(event:any){
    this.TipoUsuario = event.target.value;

  }

  /* CADASTRA UM NOVO USUARIO NA BASE DE DADOS */
  cadastrar(){
    this.usuario.tipoUsuario = this.TipoUsuario;

    if(this.usuario.senha != this.confirmaSenha){
      
    }else{
      this.usuarioService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;


     

      })
    }
  }

}
