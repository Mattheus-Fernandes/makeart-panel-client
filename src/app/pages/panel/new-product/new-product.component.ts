import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
   //@ts-ignore
   public newProductForm: FormGroup
   public msg: string = ''
   public hasMsg = false
   public done: boolean = false
 
   constructor(
     private formBuilder: FormBuilder,
     private productsService: ProductsService
   ){}
 
   ngOnInit(): void {
     
     this.newProductForm = this.formBuilder.group({
       urlImage: ['', Validators.required],
       product: ['', Validators.required],
       brand: ['', Validators.required],
       amount: [ undefined, Validators.required],
       price: [undefined , Validators.required]
     })
 
   }
 
   onSubmit(){
 
     if(this.newProductForm.valid){
       const data = this.newProductForm.value
 
       this.productsService.registerProduct(data).subscribe({
         next: (res) => {
          if(res.success){
            this.msg = res.msg
            this.hasMsg = true
            this.done = true
            this.newProductForm.reset()    
          }
        },
          error: (err) => {
            this.msg = err.error.msg
            this.hasMsg = true
            this.done = false
        }  
       })

       setTimeout(() => {
        this.hasMsg = false
      },4000)
     } 
   }

  hiddenMsg(){
    this.hasMsg = false
  }
}
