import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* GERA UMA URL DINAMICA TRAZENDO OS DADOS DO VALOR GLOBAL */
  public endereco = environment.server + environment.port;

  autorizacao = {
    //headers: new HttpHeaders().set('Authorization', environment.token)
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')

  }

  /* INJETA DEPENDENCIAS DENTRO DO SERVICE */
  constructor(
    private http: HttpClient,
    private router: Router,
    

  ) { }

  /* PESQUISA UM USUARIO POR ID */
  findByIdUsuario(id: number): Observable<Usuario> {

    return this.http.get<Usuario>(`${this.endereco}/usuarios/${id}`, this.autorizacao);
  }

  /* CONSOME A API METODO LOGAR (POST) | UsuarioLogin */
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {

    return this.http.post<UsuarioLogin>(`${this.endereco}/usuarios/logar`, usuarioLogin);
  }

  /* CONSOME A API METODO CADASTRAR (POST) | Usuario */
  cadastrar(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(`${this.endereco}/usuarios/cadastrar`, usuario);
  }

  /* RETONA UM VALOR true OU false CASO O TOKEN ESTA PREENCHIDO, CASO ESTEJA VAZIO RETONA false, 
  CASO ESTEJA COM DADOS RETONA true*/
  logado() {
    /* CRIA UMA VARIAVEL BOOLEAN */
    let identificador: boolean = false;

    if(environment.token != '') {
      identificador = true;

    }

    /* RETORNA O VALOR DA VARIAVEL */
    return identificador;
  }

  /* DELOGA DA SESSAO */
  logout() {
    environment.id = 0;
    environment.nome = '';
    environment.usuario = '';
    environment.senha = '';
    environment.tipoUsuario = '';
    environment.token = '';
    environment.itens = 0;
    

    /* ARMAZENA O TOKEN DO USUARIO NO LOCAL STORAGE */
    localStorage.removeItem('token');

    //this.alertas.alertaMensagem('Logout realizado com sucesso!');

    this.router.navigate(['/login']);

  }
}
