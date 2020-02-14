import { Pedido } from '../../../models/Pedido';
import { ProdutoPedido } from '../../../models/ProdutoPedido';
import { ServicePedido } from '../../../services/service.service.pedidos';
import { ServiceProduto } from '../../../services/service.service.produto';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { Component, OnInit, } from '@angular/core';
import { Produto } from 'app/models/Produto';
import { ServiceProdutoPedido } from 'app/services/service.service.product-request';

@Component({
  selector: 'app-modal-table-adicionar-pedido',
  templateUrl: './modal-table-adicionar-pedido-component.html',
  styleUrls: ['./modal-table-adicionar-pedido-component.scss']
})

export class ModalTableAdicionarPedidoComponent implements OnInit {
  descricaoPedido: string
  observacao: string
  produto: Produto;
  quantidade: number
  total: number = 0
  listaProduto = []
  listObjectRequest: Pedido
  listObjectRequestProduct: ProdutoPedido
  arrayId:Array<Number> = []
  retornoGetProduct:any = []

  getProdutos(){
    this.serviceProduto.getUrlApi().subscribe(
      data => {
        const response = (data as any)
        this.retornoGetProduct = response
      }, error => {
        console.error(error)
      }
    )
  }

  enviaTabela(){
    if(this.quantidade >= 1 && Number.isInteger(this.quantidade) && this.produto != undefined){
      this.listaProduto.push(
        { produto: this.produto.nome, quantidade: this.quantidade, id: this.produto.id }
      )
      console.log(this.listaProduto)
      this.arrayId.push(this.produto.id)
      console.log('Id: ', this.arrayId)
    }
    this.limpaCampos()
  }

  enviaPedido(){
    if(this.observacao != undefined && this.descricaoPedido != undefined){
      this.observacao.trim()
      this.descricaoPedido.trim()

      this.listObjectRequest = {
        total: this.total,
        titulo: this.descricaoPedido,
        fechado: false,
        aprovado: false,
        observacao: this.observacao,
        products: this.arrayId
      }

      console.log('Lista Objeto: ', this.listObjectRequest)
      this.adicionaPedido(this.listObjectRequest)
      this.modal.close()
    }
  }

  adicionaPedido(pedido){
    const request: Object = pedido
      this.servicePedido.create(request).subscribe(
        success => console.log('sucesso', success),
        error => console.error(error),
        () => console.log('Request Retorno')
      )
  }

  removerLinha(){
    
  }

  limpaCampos(){
    this.produto = null
    this.quantidade = null
  }
  
  constructor(
    private modal: MatDialogRef<ModalTableAdicionarPedidoComponent>,
    private snackBar: MatSnackBar,
    private serviceProduto: ServiceProduto,
    private servicePedido: ServicePedido,
    private serviceProdutoPedido: ServiceProdutoPedido,
  ) {  }

  ngOnInit( ){
    this.getProdutos()
  }
}
