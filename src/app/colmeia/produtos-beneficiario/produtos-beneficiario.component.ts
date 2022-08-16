import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produtos-beneficiario',
  templateUrl: './produtos-beneficiario.component.html',
  styleUrls: ['./produtos-beneficiario.component.css']
})
export class ProdutosBeneficiarioComponent implements OnInit {
  private produtoService: ProdutoService;
  public produtos = {} as  Produto[];

  prod = {
      nome: "",
      qtdItem: 0,
      estoque:0,
      img:String,
      categoria :{
        id: 0,
        nome: String
      } as any
    } as any;
  
  constructor(
    produtoService: ProdutoService
  ) { 
    this.produtoService=produtoService;

  }

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(){
    const listProdutos: Produto[] = [];
    this.produtoService.findAllByProdutos().subscribe(datas =>{
      datas.forEach(x => {
        this.prod = {
          nome: x.nome,
          qtdItem: x.qtdItemProduto,
          estoque: x.estoque,
          img: x.img,
          categoria :{
            id: x.categoria.id,
            nome: x.categoria.nome
          }
          
        }
        listProdutos.push(this.prod)
     
      })
      this.produtos = listProdutos;
    })
  }

  adicionarProduto(produto:any){

  }
  /* TRAZ SOMENTE UM UNICO PRODUTO POR MEIO DE SEUS ID */
  findByIdProduto(id: number) {
    this.produtoService.findByIdProduto(id).subscribe((resp: Produto) => {
      this.prod = resp;

    })

  }
   /* TRAZ TODOS OS PRODUTOS CADASTRADOS NA BASE DE DADOS */
   findAllByProdutos() {
    this.produtoService.findAllByProdutos().subscribe((resp: Produto[]) => {
      this.produtos = resp;

    })

  }

  /* ATUALIZA UM PRODUTO JA EXISTENTE NA BASE DE DADOS */
  putProduto(estoque: any ) {
    
    this.prod.estoque= estoque;
    

    this.produtoService.putProduto(this.prod).subscribe((resp: Produto) => {
      this.prod = resp;


      this.prod = new Produto();
      this.findAllByProdutos();

    }, erro => {
      if(erro.status == 500) {
        console.log(`Erro: ${erro.status}, algum dado esta sendo inserido incorretamente.`)

      }else if(erro.status >= 400 && erro.status < 500){
        console.log(`Erro: ${erro.status}, acesso nao autorizado, verifique seu login.`)

      }

    })

  }
}
