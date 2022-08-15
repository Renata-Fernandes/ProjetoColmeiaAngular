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
    let i=0;
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
        i++;
      })
      this.produtos = listProdutos;
      let div = i/3;
    })
  }

  adicionarProduto(produto:any){

  }
}
