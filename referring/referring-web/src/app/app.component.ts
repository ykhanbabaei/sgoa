import { Component } from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  addExtraClass: boolean = false;

  constructor(public snackBar: MdSnackBar) { }

    ngOnInit() {
    }

open() {
    let config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }
  favClicked(){
      this.message = "Fav clicked";      
      this.open();
  }
  
  delClicked(){
      this.message = "Del clicked";
      this.open();
  }
}
