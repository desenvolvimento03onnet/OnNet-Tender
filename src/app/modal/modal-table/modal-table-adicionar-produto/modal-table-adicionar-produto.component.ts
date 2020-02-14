import { ServiceProduto } from './../../../services/service.service.produto';
import { ServiceCategoria } from '../../../services/service.service.categoria';
import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-table-adicionar-produto',
  templateUrl: './modal-table-adicionar-produto.component.html',
  styleUrls: ['./modal-table-adicionar-produto.component.scss']
})
export class ModalTableAdicionarProdutoComponent implements OnInit {

  categoriaSelecionada
  @ViewChild('message') message: ElementRef
  produto: string = ''
  listaObjectCategoria: Object[]
  listaObjectProduto: Object[]
  select

  constructor(
    private snackBar: MatSnackBar,
    private category: ServiceCategoria,
    private product: ServiceProduto,
    private modal: MatDialogRef<ModalTableAdicionarProdutoComponent>,
    private procuctTable: ServiceProduto,
  ) { }

  carregaCategoria(){
    this.category.getUrlApiCategoriaAll().subscribe(
      data => {
        const response = (data as any)
        this.listaObjectCategoria = response
        console.log(this.listaObjectCategoria)
      }, error => {
        console.error(error)
      }
    )
  }

  ngOnInit() {
    this.carregaCategoria()
  }

  adicionaProduto(){
    const dados:Object = {
      nome: this.produto,
      categoria_id: this.categoriaSelecionada.id
    }

    this.product.create(dados).subscribe(
      success => console.log('Sucesso', success),
      error => console.error(error),
      () => console.log('Request retorno'),
    )

    this.modal.close()
  }

  carregaProduto(){
    this.procuctTable.getUrlApi().subscribe(
      data=>{
        const response = (data as any);
        this.listaObjectProduto = response;
        console.log(this.listaObjectProduto)
      }, error => {
        console.log(error);
    })
  }

/*
Aqui jas um código com snackbar
  adicionaProduto(message: string, action: null){
    if(this.message.nativeElement.value != ''){      
      console.log(this.categoria);
      console.log(this.message);
      
      message = message.toString().trim();
      this.snackBar.open(`Produto: ${message} cadastrado com sucesso`, action, {
        duration: 3000,
      });
    } else {
      this.snackBar.open(message = 'Insira uma descrição válido', action, {
        duration: 3000,
      });      
    }
  }
*/
}
