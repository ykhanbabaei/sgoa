import { Component, OnInit, Input } from '@angular/core';
import { Referring} from '../referring.model'
import { ActivatedRoute } from '@angular/router'
import { ReferringDetailService } from './referring-detail.service';

@Component({
  selector: 'app-referring-detail',
  templateUrl: './referring-detail.component.html',
  styleUrls: ['./referring-detail.component.scss']
})
export class ReferringDetailComponent implements OnInit {

  @Input() referring: Referring;
  id:number;

  constructor(private route: ActivatedRoute, private referringDetailService: ReferringDetailService) { 
      this.referring = new Referring();
  }

  ngOnInit() {
      this.route.params.subscribe(params=> {
          this.id = +params['ref-detail-id'];
          console.log('ReferringDetailComponent '+this.id);
          this.id && this.loadReferring();
          });
  }
  
  loadReferring(){
      this.referringDetailService.loadReferring(this.id)
      .subscribe(referring => {this.referring = referring},
        error => console.log(<any>error));
  }

}
