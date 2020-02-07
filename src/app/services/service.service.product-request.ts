import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProdutoPedido{
    
    private base:string = this.global.base_API_URL
    private extensao:string = '/product_request'
    private url:string = this.base + this.extensao

    constructor(
        private http: HttpClient,
        private global: GlobalVariable
    ) {  }

    getUrlAllRequest(){
        return this.http.get(this.url)
    }
    create(produto_pedido){
        return this.http.post(this.url, produto_pedido).pipe()
    }

}