import { MatDialog } from '@angular/material';
import { take } from 'rxjs/operators';
import { GlobalVariable, ConfigModal } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicePedido{

    constructor( 
        private http: HttpClient,
        private global: GlobalVariable,
    ){  }

    private base:string = this.global.base_API_URL
    private extensao:string = '/request'
    private url:string = this.base + this.extensao

    getUrlAllRequest(){
        return this.http.get(this.url)
    }
    create(pedido){
        return this.http.post(this.url, pedido).pipe(take(1))
    }
}
