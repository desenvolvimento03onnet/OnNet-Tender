import { Categoria } from './../models/Categoria';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from './../global';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ServiceCategoria {

    private base: string = this.global.base_API_URL
    private extensao: string = '/category'
    private url: string = this.base + this.extensao

    constructor(
      private global: GlobalVariable,
      private http: HttpClient,
    ){  }

    getUrlApiCategoriaAll(): Observable<Categoria>{
      return this.http.get<Categoria>(this.url)
    }

    postCategoria(categoria){
      return this.http.post(this.url, categoria).pipe(retry(3))
    }

    alter(categoria, corpo){
      var extensao = `/${categoria}`
      var URL = this.url + extensao
      console.log('URL: ', URL)
      return this.http.put(URL, corpo).pipe()
    }
    
}