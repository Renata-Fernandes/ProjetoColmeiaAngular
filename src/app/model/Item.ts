import { Usuario } from "./Usuario";
import { Produto } from "./Produto";

export class Item {
    public id: number | undefined;
    public data: Date | undefined;
    public qtdProduto: number | undefined;
    public produtos: Produto[] | undefined;
    public usuario: Usuario | undefined;

}
