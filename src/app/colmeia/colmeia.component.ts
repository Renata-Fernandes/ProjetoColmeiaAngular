import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-colmeia',
  templateUrl: './colmeia.component.html',
  styleUrls: ['./colmeia.component.css']
})
export class ColmeiaComponent implements OnInit {

  constructor() { }
  usuario: Usuario={
    id:0,
    cpf: "",
    itens:[],
    nome:"",
    senha:"",
    tipoUsuario:"",
    usuario:""
  }
  ngOnInit(): void {
  }

}
