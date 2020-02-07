import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from './../global';
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceCategoria {

    private base: string = this.global.base_API_URL
    private extensao: string = '/category'
    private url: string = this.base + this.extensao

    constructor(
      private global: GlobalVariable,
      private http: HttpClient
    ){  }

    getUrlApiCategoriaAll(){
      return this.http.get(this.url)
    }

    postCategoria(categoria){
      return this.http.post(this.url, categoria).pipe()
    }

    alter(categoria){
      return this.http.put(this.url, categoria).pipe()
    }
}