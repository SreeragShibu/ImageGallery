import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class freeApiService{

    constructor(private httpclient: HttpClient){}

    getimages(): Observable<any>{
            return this.httpclient.get("http://127.0.0.1:8000/images/")
    }
}
