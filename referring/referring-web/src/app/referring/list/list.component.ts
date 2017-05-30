import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { ListService } from './list.service';
import { Referring } from '../referring.model';

@Component( {
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Output() onReferringSelected = new EventEmitter<Referring>();
    
    referrings: Observable<Referring[]>;
    private searchTerms = new Subject<string>();
    constructor(private listService: ListService) { }

    // Push a search term into the observable stream.
    search( term: string ): void {
        this.searchTerms.next( term );
    }
    
    ngOnInit(): void {
        this.referrings = this.searchTerms
            .debounceTime( 300 )        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap( term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.listService.search( term )
                // or the observable of empty heroes if there was no search term
                : Observable.of<Referring[]>( [] ) )
            .catch( error => {
                // TODO: add real error handling
                console.log( error );
                return Observable.of<Referring[]>( [] );
            });
    }
    gotoDetail( referring : Referring ): void {
//        let link = ['/detail', hero.id];
//        this.router.navigate( link );
    }
    
    itemSelected(referring: Referring){
        this.onReferringSelected.emit(referring);
    }

}
