import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Item } from '../model/Item';
//import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  [x: string]: any;

  nome = environment.nome;
  idUsuario = environment.id;
  idItem = environment.itens;

  produto: Produto = new Produto();
  
  usuario: Usuario = new Usuario();
  //confirmarSenha: string;
  tipoUsuario: string | undefined;

  /* DADOS CARRINHO USUARIO */
  item: Item = new Item();
  listaDeItens: Item[] | undefined;

  Item: Produto[] | undefined | undefined;
  memoria: Produto[] = [];
  memoriaV: Produto[] = [];

  idCarrinho = environment.itens;

  idMemoria: number | undefined;
  /* ###################### */

  constructor(
    private router: Router,
    private authService: AuthService,
    private produtoService: ProdutoService,

  ) { }
  ngOnInit(...args: []) {
    if (environment.token == '') {
      this.router.navigate(['/login']);

    }

    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }

    //this.findByIdListaDeDesejos();
    //this.findByIdUsuario(environment.id);
    //this.findAllByItem();
    /* DADOS CARRINHO USUARIO */
    
    //this.['findByIdProduto']();
    //this.['findByIdItem']();

  }

  findByIdUsuario(id: number) {
    this.authService.findByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;

      console.log("Nome: "+ this.usuario.nome);

    })

  }

       

    /* ADICIONA PRODUTOS AO CARRINHO DO USUARIO */
    adicionaItemCarrinho(idProduto: number, idCarrinho: number) {
    this.produtoService.adicionaItemCarrinho(idProduto, idCarrinho).subscribe(() => {
      /* DADOS CARRINHO USUARIO */
      this['findByIdProdutosCarrinho']();

    })

    }

  /* ################################################################################# */
  /* ################## DADOS CARRINHO USUARIO ################## */

    /*findByIdProdutosCarrinho() {
    this.produtoService.findAllByProdutos().subscribe((resp: Produto[]) => {
      this.Item = resp;

      let contador: number = 0;
      let repeticao: number = 0;

      // CRIA UM VETOR PARA SERVIR DE REFERENCIA NAS VALIDACOES
      let pivo: number[] = [this.Item.length];

      for(let i = 0; i < this.Item.length; i++) {
        // ARMAZENA O ID DENTRO DO PIVO PARA SERVIR DE REFERENCIA
        pivo[i] = this.Item[i].id;

        // ENTRA NO LOOP DO PRODUTO TRABALHO NO MOMENTO
        for(let item of this.Item) {
          // VERIFICA SE O VALOR DO PIVO E O MESMO DO ID DO LOOP ATUAL NO QUAL ESTAMOS TRABALHANDO
          if(pivo[i] == item.id) {
            // ADICIONA UM AO CONTADOR
            contador++;

          }

          // ATRIBUI O VALOR DO CONTADOR A QTD DE UM DETERMINADO PRODUTO DE ACORDO COM A QTD DESSE MESMO PRODUTO NA LISTA
          this.Item[i].qtdPedidoProduto = contador;

        }

        // INSERE O PRIMEIRO VALOR PARA INICIALIZAR OS VALORES NO VETOR
        this.memoria = this.Item;

        // ZERA O CONTADO PARA REMOCMECAR UMA NOVA CONTAGEM
        contador = 0;

			}

    })

  }*/

  /*findByIdLista() {
    this.pedidoService.findByIdLista(environment.lista).subscribe((resp: Pedido) => {
      this.pedido = resp;

    })

  }*/

  removerProdutoDoCarrinho(idProduto: number, idItem: number) {
    this.produtoService.removerProdutoDoCarrinho(idProduto, idItem).subscribe(() => {
      //this.alertas.alertaMensagem('Item removido do carrinho!');

      //this.alertas.alertaMensagem('Item removido do carrinho!');
      this['findByIdProdutosCarrinho'](idItem);
      this['findByIdProduto'](idProduto);

    })

  }

  /* EM NOSSA ESTRUTURA ESSE METODO NAO SERA UTILIZADO, ESTA MAIS AQUI POR FINS DIDATICOS */
  postPedido() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;

     // this.alertas.alertaMensagem('Pedido cadastrado com sucesso');

      this.router.navigate(['/produto']);

    })

  }

  /* PEMISSAO DE ADMINISTRADOR */
  adm (){
    let permissao = false;

    if(environment.tipoUsuario == 'adm') {
      permissao = true;

    }

    return permissao;

  }

}

function tipoUsuario(event: Event | undefined, any: any) {
  throw new Error('Function not implemented.');
}

