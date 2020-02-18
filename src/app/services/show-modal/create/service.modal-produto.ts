import { ConfigModal } from '../../../global';
import { MatDialog } from '@angular/material';
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceModalProduto{

    constructor(
        private modal: MatDialog,
        private tamModal: ConfigModal,
    ) {  }

}
