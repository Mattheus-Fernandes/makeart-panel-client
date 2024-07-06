import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';



@NgModule({
  declarations: [
    CardComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    AlertMessageComponent
  ]
})
export class ComponentsModule { }
