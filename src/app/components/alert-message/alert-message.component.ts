import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent {


  @Input("getMsg") msg: string = ""
  @Input("getHasMsg") hasMsg: boolean = false
  @Input("getDone") done: boolean = false

  hiddenMsg(){
    this.hasMsg = false
  }

}
