import { GlobalVariable } from './../global';
import { Observable } from 'rxjs';
import { Injectable, Inject } from "@angular/core";
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
        
        const setToken = window.sessionStorage.setItem('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU4MDIzNDMxM30.42IXE1xZoFa96tsKaHPDQDVO59DM6UV3BgFuKhI2EqY')
        const authToken = window.sessionStorage.getItem('auth_token')

        if (authToken) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authToken}`),
            })
        }
        return next.handle(req)
    }
}