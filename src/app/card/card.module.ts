import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgxImagelyModule } from '@iresa/ngx-imagely';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    NgxImagelyModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
