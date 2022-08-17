import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-id',
  templateUrl: './produto-id.component.html',
  styleUrls: ['./produto-id.component.css']
})
export class ProdutoIdComponent implements OnInit {
  private produtoService: ProdutoService;
  public produtos = {} as  Produto[];
  public  qtdProdutoSolicitado!: number;
  public qtdProd!: number;
  prod = {
      id:0,
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
  adicionarProd(produto: any){
    // passar o valor do qtdprodsolic para item
   
    produto.qtdItem =  this.qtdProd; 
    produto.estoque-= this.qtdProd;
    this.produtoService.putProduto(produto).subscribe(()=>{
      this.listarProduto();
      alert("adicionado c sucesso")
    })
  }
  listarProduto(){
    const listProdutos: Produto[] = [];
        this.produtoService.findAllByProdutos().subscribe(datas =>{
      datas.forEach(x => {
        this.prod = {
          id:x.id,
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

  deletar(produto:Produto){
    this.produtoService.deleteProduto(produto.id).subscribe(()=>{
      this.listarProduto();
      alert("deletado c sucesso")
    })

  }
 }
