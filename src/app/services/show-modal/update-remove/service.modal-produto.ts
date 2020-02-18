import { ServiceModalUpdateCategoria } from './service.modal-categoria';
import { ModalEditarCategoriaComponent } from 'app/modal/modal-editar/modal-editar-categoria/modal-editar-categoria.component';
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

    modalEditarCategoria(){
        this.modal.open(ModalEditarCategoriaComponent, this.tamModal.tamModal)
    }

}