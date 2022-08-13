import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { AlertasService } from './alertas.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api = environment.server + environment.port;

  autorizacao = {
    //headers: new HttpHeaders().set('Authorization', environment.token)
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')

  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertas: AlertasService

  ) { }

  /* PESQUISA UM USUARIO POR ID */
  findByIdCliente(id: number): Observable<Usuario> {

    return this.http.get<Usuario>(`${this.api}/usuarios/${id}`, this.autorizacao);
  }

  /* CONSOME A API METODO LOGAR (POST) | ClienteLogin */
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {

    return this.http.post<UsuarioLogin>(`${this.api}/usuarios/logar`, usuarioLogin);
  }

  /* CONSOME A API METODO CADASTRAR (POST) | Cliente */
  cadastrar(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(`${this.api}/usuarios/cadastrar`, usuario, this.autorizacao);
  }

  /* CONSOME A API METODO ATUALIZA (PUT) | Cliente */
  atualizar(usuario: Usuario): Observable<Usuario> {

    return this.http.put<Usuario>(`${this.api}/usuarios/atualizar`, usuario, this.autorizacao);
  }

  removerItemDoCarrinho(idProduto: number, idUsuario: number): Observable<Produto[]> {

    return this.http.get<Produto[]>(`${this.api}/usuarios/produto_item/produtos/${idProduto}/itens/${idUsuario}`, this.autorizacao);
  }

  /* RETONA UM VALOR true OU false CASO O TOKEN ESTA PREENCHIDO, CASO ESTEJA VAZIO RETONA false, CASO ESTEJA COM DADOS RETONA true*/
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

    /* ARMAZENA O TOKEN DO USUARIO NO LOCAL STORAGE */
    localStorage.removeItem('token');

    this.alertas.alertaMensagem('Logout realizado com sucesso!');

    this.router.navigate(['/login']);

  }

}
