import { ModalTableAdicionarPedidoComponent } from '../../../modal/modal-table/modal-table-adicionar-pedido/modal-table-adicionar-pedido.component';
import { ConfigModal } from '../../../global';
import { MatDialog } from '@angular/material';
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceModalPedido{
    
    constructor(
        private modal: MatDialog,
        private tamModal: ConfigModal,
    ) {  }

    modalTableAdicionarPedido(){
        this.modal.open(ModalTableAdicionarPedidoComponent, this.tamModal.tamModalPedido)
    }
}