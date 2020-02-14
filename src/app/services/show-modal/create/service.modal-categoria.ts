import { ModalTableAdicionarCategoriaComponent } from '../../../modal/modal-table/modal-table-adicionar-categoria/modal-table-adicionar-categoria.component';
import { ConfigModal } from '../../../global';
import { MatDialog } from '@angular/material';
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceModalCategoria{
    
    constructor(
        private modal: MatDialog,
        private tamModal: ConfigModal,
    ) {  }
    
    modalTableAdicionarCategoria(){
        this.modal.open(ModalTableAdicionarCategoriaComponent, this.tamModal.tamModal)
    }

}