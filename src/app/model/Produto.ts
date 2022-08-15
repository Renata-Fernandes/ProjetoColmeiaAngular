import { Usuario } from './Usuario';
import { Categoria } from "./Categoria";

export class Produto {
    public id!: number;
    public nome!: string;
    public img!: string;
    public estoque!: number;
    public qtdItemProduto!: number;
    public categoria!: Categoria;
    public itens!: Usuario[];

}
