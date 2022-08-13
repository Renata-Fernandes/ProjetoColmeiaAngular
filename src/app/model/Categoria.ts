import { Produto } from "./Produto";

export class Categoria {
    public id: number | undefined;
    public nome: string | undefined;
    public produtos: Produto[] | undefined;

}
