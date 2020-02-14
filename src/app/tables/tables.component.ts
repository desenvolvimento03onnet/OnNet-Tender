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
) { }

  adicionaProduto(){
    this.modal.open(ModalTableAdicionarProdutoComponent, this.tamModal.tamModal);
  }

  adicionaCategoria(){    
    this.modal.open(ModalTableAdicionarCategoriaComponent, this.tamModal.tamModal);
  }

  adicionaPedido(){
    this.modal.open(ModalTableAdicionarPedidoComponent, this.tamModal.tamModalPedido);
  }

  carregaCategoria(){
  this.serviceCategory.getUrlApiCategoriaAll().subscribe(
    data => {
      const response = (data as any)
      this.listaObjetosCategorias = response
    }, error => {
      console.log(error)
    }
  )
  }

  carregaProduto(){
    this.service.getUrlApi().subscribe(
      data=>{
        const response = (data as any);
        this.listaObjetosProdutos = response;
      }, error => {
        console.log(error);
    })
  }

  carregaPedido(){
    this.serviceRequest.getUrlAllRequest().subscribe(
      data => {
        this.listaObjetosPedidos = data['data']
      }, error => {
        console.error(error)
      }
    )
  }

  editaProduto(){
    console.log('Implementar')
  }

  editaCategoria(){
    console.log('Implementar')
  }

  editaPedido(){
    console.log('Implementar')
  }

  ngOnInit() {
    this.carregaProduto()
    this.carregaCategoria()
    this.carregaPedido()

    //Testar para ver se funfa passar o id por paramentro
    /*this.serviceRequest.getUrlAllRequest(4).subscribe(
      data => {
        const response = (data as any)
        this.listaObjetosPedidoId = response
        console.log(this.listaObjetosPedidoId)
      }, error => {
        console.log(error)
      }
    )*/
  }

}