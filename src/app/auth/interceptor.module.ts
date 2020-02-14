import { GlobalVariable } from './../global';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

    constructor(
        public global: GlobalVariable,
    ){  }
/*
    intercept(
        req: HttpRequest<any>, //Qual tipo de requisição será afetada
        next: HttpHandler, //Passa ele para frente
    ): Observable<HttpEvent<any>> {
        console.log('Passei por aqui')
        const dupReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.global.token}`),
        })
      return next.handle(dupReq)
    }
*/

    intercept(
        req: HttpRequest<any>, //Qual tipo de requisição será afetada
        next: HttpHandler, //Passa ele para frente
        ): Observable<HttpEvent<any>> {
        
        const setToken = window.sessionStorage.setItem('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTU4MTYxMDU5MX0.Nk96Bb8nMk-wUax1y9FhjCLDd2yWSUAOw5dvp5zRGxI')
        const authToken = window.sessionStorage.getItem('auth_token')

        if (authToken) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authToken}`),
            })
        }
        return next.handle(req)
    }
}