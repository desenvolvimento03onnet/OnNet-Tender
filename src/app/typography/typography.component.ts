import { ServiceProdutoPedido } from 'app/services/service.service.product-request';
import { Pedido } from './../models/Pedido';
import { ServicePedido } from './../services/service.service.pedidos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(
    private serviceRequest: ServicePedido,
    private serviceProductRequest: ServiceProdutoPedido,
  ) { }

  pedidosNaoVistos: Pedido
  pedidosVistos: Pedido
  pedidosResolvidos: Object
  pedidosFechados: Object
  pedidosAbertos: Object

  listaPedidosEnviados(){
    this.serviceRequest.getAprovedTrueClosedFalse().subscribe(
      data => {
        this.pedidosVistos = (data as any)
      }, error => {
        console.error(error)
      }
    )
  }

  listaPedidosNaoEnviados(){
    this.serviceRequest.getAprovedFalseClosedFalse().subscribe(
      data => {
        this.pedidosNaoVistos = (data as any)
      }, error => {
        console.error(error)
      }
    )
  }

  listaPedidosResolvidos(){
    this.serviceProductRequest.getUrlAllRequest().subscribe(
      data => {
        this.pedidosResolvidos = data['data']
      }, error => {
        console.error(error)
      }
    )
  }

  listaPedidosFechados(){
    this.serviceRequest.getAprovedTrueClosedTrue().subscribe(
      data => {
        this.pedidosFechados = data['data']
      }, error => {
        console.error(error)
      }
    )
  }

  listaPedidosAbertos(){
    this.serviceRequest.getAprovedFalseClosedFalse().subscribe(
      data => {
        this.pedidosAbertos = data['data']
      }, error => {
        console.error(error)
      }
    )
  }

  ngOnInit() {
    this.listaPedidosEnviados()
    this.listaPedidosNaoEnviados()
    this.listaPedidosResolvidos()

    this.listaPedidosFechados()
    this.listaPedidosAbertos()
  }

}
