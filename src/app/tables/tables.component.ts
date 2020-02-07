import { ModalEditarCategoriaComponent } from 'app/modal/modal-editar/modal-editar-categoria/modal-editar-categoria.component';
import { ModalEditarProdutoComponent } from './../modal/modal-editar/modal-editar-produto/modal-editar-produto.component';
import { Categoria } from './../models/Categoria';
import { ServiceProduto } from './../services/service.service.produto';
import { ServicePedido } from './../services/service.service.pedidos';
import { ServiceCategoria } from './../services/service.service.categoria';
import { ModalTableRemoverComponent } from './../modal/modal-table/modal-table-remover/modal-table-remover.component';
import { ConfigModal } from './../global';
import { ModalTableAtualizarComponent } from './../modal/modal-table/modal-table-atualizar/modal-table-atualizar.component';
import { ModalTableAdicionarComponent } from './../modal/modal-table/modal-table-adicionar/modal-table-adicionar.component';
import { Component, OnInit, } from '@angular/core';
import { MatDialog, } from '@angular/material';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public tableData1: TableData
  public tableData2: TableData
  public listaObjetosProduto: Object
  public listaObjetosCategoria: Categoria
  public listaObjetosPedido: Object
  private categoria: Categoria
  public enviaObjetoCategoria: Categoria

  constructor(
    private modal: MatDialog,
    private tamModal: ConfigModal,
    private serviceProduct: ServiceProduto,
    private serviceCategory: ServiceCategoria,
    private serviceRequest: ServicePedido,
  ) { }

  modalTableAddProduto(){
    this.modal.open(ModalTableAdicionarComponent, this.tamModal.tamModal);
  }

  modalTableAddCategoria(){    
    this.modal.open(ModalTableAtualizarComponent, this.tamModal.tamModal);
  }

  modalTableAddPedido(){
    this.modal.open(ModalTableRemoverComponent, this.tamModal.tamModalPedido);
  }

  editaCategoria(){
    this.modal.open(ModalEditarCategoriaComponent, this.tamModal.tamModal)
  }
  
  editaProduto(){
    this.modal.open(ModalEditarProdutoComponent, this.tamModal.tamModal)
  }

  enviaIdCategoria(id: number, tipo: string){
    this.enviaObjetoCategoria = { id: id, tipo: tipo }
    console.log(this.enviaObjetoCategoria)

  }

  carregaCategoria(){
  this.serviceCategory.getUrlApiCategoriaAll().subscribe(
    data => {
      const response = (data as any)
      this.listaObjetosCategoria = response
    }, error => {
      console.log(error)
    })
  }

  carregaProduto(){
    this.serviceProduct.getUrlApi().subscribe(
      data => {
        const response = (data as any);
        this.listaObjetosProduto = response;
      }, error => {
        console.log(error);
      })
  }
  
  carregaPedido(){
    this.serviceRequest.getUrlAllRequest().subscribe(
      data => {
        const response = data['data']
        this.listaObjetosPedido = response
        console.log('teste', this.listaObjetosPedido)
      }, error => {
        console.error(error)
      }
    )
  }

  ngOnInit() {
    this.carregaProduto()
    this.carregaCategoria()
    this.carregaPedido()

  }
}
