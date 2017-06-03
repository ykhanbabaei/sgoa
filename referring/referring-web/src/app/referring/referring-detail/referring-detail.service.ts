import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Referring } from '../referring.model';

@Injectable()
export class ReferringDetailService {
    
    constructor( private http: Http ) { }
    
    loadReferring( id: number ): Observable<Referring> {
        return this.http
            .get( `api/referring/${id}` )
            .map( response => response.json()||{} as Referring );
    }
    
}