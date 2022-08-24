import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalFollowersPipe } from './pipes/total-followers.pipe';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    ListComponent,
    CardComponent,
    TotalFollowersPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent,
    ListComponent,
    CardComponent,
    TotalFollowersPipe
  ]
})
export class SharedModule { }
