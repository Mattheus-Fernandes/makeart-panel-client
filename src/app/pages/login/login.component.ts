import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //@ts-ignore
  public myForm: FormGroup
  //@ts-ignore
  public email: string
  //@ts-ignore
  public password: string
  public hasMsg: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  
  ){}

  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })

  }


  login(){
    this.email = this.myForm.value.email
    this.password = this.myForm.value.password

    if(this.email == "Makeart@makeart.com" || this.email == "makeart@makeart.com" && this.password == "14109015makebuy"){
      this.router.navigate(["/panel"])
    }else {
      this.hasMsg = true 
    }
  }

}
