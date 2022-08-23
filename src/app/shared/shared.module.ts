import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent,
    ListComponent,
    CardComponent
  ]
})
export class SharedModule { }
