import { Produto } from './Produto';

export class Usuario {
    public id: number| undefined;
    public nome: string| undefined;
    public usuario: string| undefined;
    public cpf: string| undefined;
    public senha: string| undefined;
    public tipoUsuario: string| undefined;
    public itens: Produto[]| undefined;

}
