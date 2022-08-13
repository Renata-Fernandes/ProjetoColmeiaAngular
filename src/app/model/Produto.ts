import { Usuario } from './Usuario';
import { Categoria } from "./Categoria";

export class Produto {
    public id: number| undefined;
    public nome: string| undefined;
    public img: string| undefined;
    public estoque: number| undefined;
    public qtdItemProduto: number| undefined;
    public categoria: Categoria | undefined;
    public itens: Usuario[] | undefined;

}
