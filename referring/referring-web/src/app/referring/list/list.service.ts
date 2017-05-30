import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Referring } from '../referring.model';

@Injectable()
export class ListService {
    
    constructor( private http: Http ) { }
    
    search( term: string ): Observable<Referring[]> {
        return this.http
            .get( `api/referring/?name=${term}` )
            .map( response => response.json()||{} as Referring[] );
    }
    
}