import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isClassVisible: boolean = false;

  constructor(){}

  toggleMenu(){
    this.isClassVisible = !this.isClassVisible
  }

}
