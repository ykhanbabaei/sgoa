import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ListComponent } from './referring/list/list.component';
import { ListService} from './referring/list/list.service';
import {
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdRadioModule,
    MdSnackBarModule,
    MdChipsModule
  } from "@angular/material";
import { ReferringComponent } from './referring/referring.component';
import { ReferringDetailComponent } from './referring/referring-detail/referring-detail.component';
import { CartableComponent } from './cartable/cartable.component';
  
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ReferringComponent,
    ReferringDetailComponent,
    CartableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule, MdButtonModule, MdCheckboxModule, MdAutocompleteModule, MdCardModule,MdChipsModule,
    MdDialogModule, MdIconModule, MdInputModule, MdMenuModule, MdRadioModule, MdSnackBarModule,
    RouterModule.forRoot([
      {path: 'cartable', component: CartableComponent},
      {path: 'referring/:id', component: ReferringComponent},
      {path: '', component: CartableComponent},
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
