import { take } from 'rxjs/operators';
import { GlobalVariable } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicePedido{

    private base:string = this.global.base_API_URL
    private extensao:string = '/request'
    private urlFilterAprovedFalse:string = '/request/filter/byAproved?aproved=false'
    private urlFilterClosedFalse:string = '/request/filter/byClosed?fechado=false'
    private urlFilterAprovedTrue:string = '/request/filter/byAproved?aproved=true'
    private urlFilterClosedTrue:string = '/request/filter/byClosed?fechado=true'

    private aprovedFalseClosedFalse:string = '/request/filter/filterByClosedAndAproved?closed=false&approved=false'
    private aprovedFalseClosedTrue:string = '/request/filter/filterByClosedAndAproved?closed=true&approved=false'//Não pode existir
    private aprovedTrueClosedFalse:string = '/request/filter/filterByClosedAndAproved?closed=false&approved=true'
    private aprovedTrueClosedTrue:string = '/request/filter/filterByClosedAndAproved?closed=true&approved=true'

    private url:string = this.base + this.extensao
    private urlAprovedFalseClosedFalse:string = this.base + this.aprovedFalseClosedFalse
    private urlAprovedFalseClosedTrue:string = this.base + this.aprovedFalseClosedTrue
    private urlAprovedTrueClosedFalse:string = this.base + this.aprovedTrueClosedFalse
    private urlAprovedTrueClosedTrue:string = this.base + this.aprovedTrueClosedTrue

    constructor( 
        private http: HttpClient,
        private global: GlobalVariable,
    ){  }

    create(pedido){
        return this.http.post(this.url, pedido).pipe(take(1))
    }

    getUrlAllRequest(){
        return this.http.get(this.url)
    }

    getAprovedFalseClosedFalse(){
        return this.http.get(this.urlAprovedFalseClosedFalse)
    }

    //Não pode existir
    getAprovedFalseClosedTrue(){
        return this.http.get(this.urlAprovedFalseClosedTrue)
    }

    getAprovedTrueClosedFalse(){
        return this.http.get(this.urlAprovedTrueClosedFalse)
    }

    getAprovedTrueClosedTrue(){
        return this.http.get(this.urlAprovedTrueClosedTrue)
    }

}
