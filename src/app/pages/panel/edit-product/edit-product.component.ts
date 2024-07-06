import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  //@ts-ignore
  public id: string | null
  //@ts-ignore
  public editProductForm: FormGroup

  public srcAndAlt: Array<{src: string, alt: string}> = []
  //@ts-ignore
  public msg: string = ''
  public hasMsg = false
  public done: boolean = false

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){}



  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })
    
    this.editProductForm = this.formBuilder.group({
      urlImage: [undefined, Validators.required],
      product: [undefined, Validators.required],
      brand: [undefined, Validators.required],
      amount: [undefined, Validators.required],
      price: [undefined, Validators.required],
      sales: [undefined, Validators.required]
    })
    
    this.productsService.getProduct(this.id).subscribe(res => {

      this.editProductForm.patchValue({
        urlImage: res.urlImage,
        product: res.product,
        brand: res.brand,
        amount: res.amount,
        price: res.price,
        sales: res.sales
      })

      this.srcAndAlt = [
        {src: res.urlImage, alt: res.product}
      ]
    })  
  }


  hiddenMsg(){
    this.hasMsg = false
  }

  onSubmit(){
    if(this.editProductForm.valid){
      const data = this.editProductForm.value

      this.productsService.editProduct(this.id, data).subscribe({
        next: (res) => {
          if(res.success){
            this.msg = res.msg
            this.hasMsg = true
            this.done = true
            this.editProductForm.reset()
          }
        },
        error: (err) => console.log(err)
      })

      setTimeout(() => {
        this.hasMsg = false
      },4000)

    }else {
      console.log("Inválido")
    }
  }

}
