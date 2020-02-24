import { ServiceCategoria } from './../../../services/service.service.categoria';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-modal-editar-categoria',
  templateUrl: './modal-editar-categoria.component.html',
  styleUrls: ['./modal-editar-categoria.component.scss']
})
export class ModalEditarCategoriaComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ModalEditarCategoriaComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceCategory: ServiceCategoria,
  ){  }

  oldName = this.data.tipo
  listaObjetosCategorias

  altera(){
    var corpo = {
      id: this.data.id,
      tipo: this.data.tipo,
    }

    this.serviceCategory.alter(this.data.id, corpo).subscribe(
      success => {
        alert(`Categoria alterada com sucesso. Nova descrição: ${this.data.tipo}`)
        this.matDialogRef.close()
      }, error => {
        alert(`Algo deu errado, refaça o processo`)
        this.matDialogRef.close()
      }
    )
  }

  ngOnInit() {

  }

}
