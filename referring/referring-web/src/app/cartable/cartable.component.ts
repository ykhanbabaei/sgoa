import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.scss']
})
export class CartableComponent implements OnInit {

  constructor(private router: Router) { }

  cartables: any[] = [
      {name: 'جاری',id:'1'},
      {name: 'پیگیری',id:'2'},
      {name: 'رونوشت',id:'3'},
      {name: 'یادداشت شده',id:'4'}

    ];
  
  ngOnInit() {
  }

  gotoReferring(cartable){
      this.router.navigate(["/referring",cartable.id]);
  }
  
}
