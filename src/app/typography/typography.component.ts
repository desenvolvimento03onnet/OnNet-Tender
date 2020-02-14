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
  ) { }

  listaObjetoPedido: Pedido

  ngOnInit() {
    this.serviceRequest.getUrlAllRequest().subscribe(
      data => {
        const response = data['data'];
        this.listaObjetoPedido = response
        console.log('teste', this.listaObjetoPedido)
      }, error => {
        console.error(error)
      }
    )
  }

}
