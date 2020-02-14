import { ModalEditarProdutoComponent } from './../../../modal/modal-editar/modal-editar-produto/modal-editar-produto.component';
import { MatDialog } from '@angular/material';
import { ConfigModal } from './../../../global';
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceModalUpdateProduto{

    constructor(
        private tamModal: ConfigModal,
        private modal: MatDialog,
    ) {  }

    modalEditarProduto(){
        this.modal.open(ModalEditarProdutoComponent, this.tamModal.tamModal)
    }

}