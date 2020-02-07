import { ModalTableRemoverComponent } from './../modal-table-remover.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-table-dados-pedido',
  templateUrl: './table-dados-pedido.component.html',
  styleUrls: ['./table-dados-pedido.component.scss']
})

export class TableDadosPedidoComponent implements OnInit {
  aux = this.table.enviaTabela()
  //pedidos: Pedido[] = []

  constructor(
    public table: ModalTableRemoverComponent,
  ) { }

  ngOnInit() {

  }

  /*adicionaProduto() { //Adiciona o produto na tabela
    let produto = this.table.enviaTabela()
    if (produto) {
      this.pedidos.push(produto)
      this.table.limpaCampos()
    } else {
      alert('erro');
    }

  }*/

  /*excluirProduto() {
    console.log(this.pedidos)
    console.log(this.table.enviaTabela())
  }*/
}
