import { ModalTableAdicionarProdutoComponent } from '../../../modal/modal-table/modal-table-adicionar-produto/modal-table-adicionar-produto.component';
import { ConfigModal } from '../../../global';
import { MatDialog } from '@angular/material';
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceModalProduto{

    constructor(
        private modal: MatDialog,
        private tamModal: ConfigModal,
    ) {  }

    modalTableAdicionarProduto(){
        this.modal.open(ModalTableAdicionarProdutoComponent, this.tamModal.tamModal)
    }
}
