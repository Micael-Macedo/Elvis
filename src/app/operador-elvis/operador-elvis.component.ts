import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  imports: [],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss'
})
export class OperadorElvisComponent implements OnInit{
  tarefa: any = {
    desc: 'Descrição da tarefa',
    // responsavel: null
    responsavel: {nome: 'Micael'}
  }

  constructor() {}

  ngOnInit() {

  }
}
