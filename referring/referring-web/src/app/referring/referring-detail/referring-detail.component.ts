import { Component, OnInit, Input } from '@angular/core';
import { Referring} from '../referring.model'

@Component({
  selector: 'app-referring-detail',
  templateUrl: './referring-detail.component.html',
  styleUrls: ['./referring-detail.component.scss']
})
export class ReferringDetailComponent implements OnInit {

    
  @Input() referring: Referring;

  constructor() { 
  }

  ngOnInit() {
  }

}
