import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class GlobalVariable {
    token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU3OTg4OTU0Mn0.i9XJNtpHKFn-sDhvP1DtQsNwb2W7JODDXc69lxJrHUY'
    base_API_URL = 'http://177.85.0.28:3333';    
}
@Injectable()
export class ConfigModal{
    tamModal: Object = 
    { height: '320px', width: '400px' };

    tamModalPedido: Object = 
    { height: '600px', width: '800px' };

}
