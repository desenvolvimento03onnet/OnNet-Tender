import { ServiceCategoria } from './../../../services/service.service.categoria';
import { ServiceProduto } from './../../../services/service.service.produto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-modal-editar-produto',
  templateUrl: './modal-editar-produto.component.html',
  styleUrls: ['./modal-editar-produto.component.scss']
})
export class ModalEditarProdutoComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ModalEditarProdutoComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceProduct: ServiceProduto,
    private serviceCategory: ServiceCategoria,
  ) { }

  oldIdProduct = this.data._id
  oldDescript = this.data._nome
  oldCategory = this.data._categoria
  oldIdCategory = this.data._id_categoria

  listaObjectCategory:Object
  categoriaSelecionada

  ngOnInit() {
    this.carregaCategoria()
    console.log('Carrega Categoria: ', this.listaObjectCategory)
  }

  alter(){
    var corpo: Object = {
      id: this.data._id,
      nome: this.data._nome,
      category: this.data._categoria,
      id_category: this.data._id_categoria
    }
    
    this.serviceProduct.alter(this.data._id, corpo).subscribe(
      success => {
        alert('Deu certo')
      }, error => {
        console.error(error)
      }
    )
  }

  disabled(){
    console.log('Implementar')
  }

  carregaCategoria(){
    this.serviceCategory.getUrlApiCategoriaAll().subscribe(
      data=>{
        this.listaObjectCategory = data
        console.log('Teste: ',this.listaObjectCategory)
      }, error => {
        console.log(error);
    })
  }

}
