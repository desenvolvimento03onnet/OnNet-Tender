import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-editar-produto',
  templateUrl: './modal-editar-produto.component.html',
  styleUrls: ['./modal-editar-produto.component.scss']
})
export class ModalEditarProdutoComponent implements OnInit {

  constructor(
    private modal: MatDialogRef<ModalEditarProdutoComponent>
  ) { }

  ngOnInit() {
  }

}
