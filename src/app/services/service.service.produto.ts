import { retry, take } from 'rxjs/operators';
import { GlobalVariable } from '../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduto {

  private base = this.global.base_API_URL;
  private extensao = '/product';
  private url = this.base + this.extensao;

  constructor(
    private http: HttpClient,
    public global: GlobalVariable
  ) {  }

  getUrlApi(){
    return this.http.get(this.url)
  }

  create(produto){
    return this.http.post(this.url, produto).pipe(take(1))
  }

}
