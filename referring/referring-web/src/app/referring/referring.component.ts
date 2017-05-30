import { Component, OnInit } from '@angular/core';
import { Referring } from './referring.model';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-referring',
  templateUrl: './referring.component.html',
  styleUrls: ['./referring.component.scss']
})
export class ReferringComponent implements OnInit {

    referring: Referring;
    id:any;
    
    constructor(private route: ActivatedRoute) { 
        this.referring = new Referring();
    }

    ngOnInit() {
        this.route.params.subscribe(params=> {this.id = +params['id'];console.log('route '+this.id);});
    }
    
    onItem(referring: Referring){
        this.referring = referring;
    }
    
}
