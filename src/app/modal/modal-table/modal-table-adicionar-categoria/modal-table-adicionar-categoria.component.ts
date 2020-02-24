import { ServiceCategoria } from '../../../services/service.service.categoria';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-table-adicionar-categoria',
  templateUrl: './modal-table-adicionar-categoria.component.html',
  styleUrls: ['./modal-table-adicionar-categoria.component.scss']
})
export class ModalTableAdicionarCategoriaComponent implements OnInit {

  private descricao: string

  constructor(
    private categoria: ServiceCategoria,
    private modal: MatDialogRef<ModalTableAdicionarCategoriaComponent>
  ) { }

  ngOnInit() {
  }

  adicionaCategoria(){
    console.log(this.descricao, 'desgraca')
    const retorno: Object = { tipo: this.descricao }
    if(this.descricao != ' '){
      this.categoria.postCategoria(retorno).subscribe(
        success =>{
          alert(`Categoria ${this.descricao}, inserido com sucesso`)
          //location.reload()
        }, error => {
        alert(`Ocorreu um erro ao inserir esta categoria`)
        }
      )
    }
    
    this.modal.close()
  }

  alteraCategoria(){
    console.log('teste')
  }
}
