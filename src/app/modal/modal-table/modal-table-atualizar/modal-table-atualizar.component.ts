import { ServiceCategoria } from './../../../services/service.service.categoria';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-table-atualizar',
  templateUrl: './modal-table-atualizar.component.html',
  styleUrls: ['./modal-table-atualizar.component.scss']
})
export class ModalTableAtualizarComponent implements OnInit {

  private descricao: string

  constructor(
    private categoria: ServiceCategoria,
    private modal: MatDialogRef<ModalTableAtualizarComponent>
  ) { }

  ngOnInit() {
  }

  adicionaCategoria(){
    console.log(this.descricao, 'desgraca')
    const retorno: Object = { tipo: this.descricao }
    if(this.descricao != ' '){
      this.categoria.postCategoria(retorno).subscribe(
        success => console.log('sucesso', success),
        error => console.error(error),
        () => console.log('Request Retorno')
      )
      alert(`Categoria ${this.descricao}, inserido com sucesso`)
    } else {
      alert(`Ocorreu um erro ao inserir esta categoria`)
    }
    this.modal.close()
  }

  alteraCategoria(){
    console.log('teste')
  }
}
