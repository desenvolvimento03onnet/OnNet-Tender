import { ModalEditarProdutoComponent } from './../modal/modal-editar/modal-editar-produto/modal-editar-produto.component';
import { ModalEditarCategoriaComponent } from 'app/modal/modal-editar/modal-editar-categoria/modal-editar-categoria.component';
import { Produto } from 'app/models/Produto';
import { Pedido } from './../models/Pedido';
import { ServiceProduto } from './../services/service.service.produto';
import { MatDialog } from '@angular/material';
import { ConfigModal } from './../global';
import { ServiceCategoria } from './../services/service.service.categoria';
import { ServicePedido } from './../services/service.service.pedidos';
import { ModalTableAdicionarPedidoComponent } from './../modal/modal-table/modal-table-adicionar-pedido/modal-table-adicionar-pedido.component';
import { ModalTableAdicionarProdutoComponent } from './../modal/modal-table/modal-table-adicionar-produto/modal-table-adicionar-produto.component';
import { Categoria } from './../models/Categoria';
import { Component, OnInit } from '@angular/core';
import { ModalTableAdicionarCategoriaComponent } from 'app/modal/modal-table/modal-table-adicionar-categoria/modal-table-adicionar-categoria.component';

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
  public listaObjetosProdutos: Produto
  public listaObjetosCategorias: Categoria
  public listaObjetosPedidos: Pedido

  constructor(
    private modal: MatDialog,
    private tamModal: ConfigModal,
    private service: ServiceProduto,
    private serviceCategory: ServiceCategoria,
    private serviceRequest: ServicePedido,
  ) {  }

  isHidden: boolean = false;

  atualiza(){
    this.carregaTudo()
  }

  adicionaProduto(){
    this.modal.open(ModalTableAdicionarProdutoComponent, this.tamModal.tamModal);
  }

  adicionaCategoria(){    
    this.modal.open(ModalTableAdicionarCategoriaComponent, this.tamModal.tamModal);
  }

  adicionaPedido(){
    this.modal.open(ModalTableAdicionarPedidoComponent, this.tamModal.tamModalPedido);
  }

  editaProduto(_id, _nome, _categoria, _id_categoria){
    this.modal.open(ModalEditarProdutoComponent, { height: '400px', width: '400px', data: { _id, _nome, _categoria, _id_categoria } } )
  }

  editaCategoria(_id, _tipo){
    this.modal.open(ModalEditarCategoriaComponent, { height: '320px', width: '400px', data: { id: _id, tipo: _tipo } } )
  }

  editaPedido(_id, ){
    console.log('Implementar')
  }

  ngOnInit() {
    this.carregaTudo()
  }

  carregaTudo(){
    this.serviceCategory.getUrlApiCategoriaAll().subscribe(
      data => {
        const response = (data as any)
        this.listaObjetosCategorias = response
      }, error => {
        console.log(error)
    })

    this.service.getUrlApi().subscribe(
      data=>{
        const response = (data as any);
        this.listaObjetosProdutos = response;
      }, error => {
        console.log(error);
    })

    this.serviceRequest.getUrlAllRequest().subscribe(
      data => {
        this.listaObjetosPedidos = data['data']
      }, error => {
        console.error(error)
    })
  }

}