import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  //@ts-ignore
  public id: string | null
  public data:any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })

    this.productsService.getProduct(this.id).subscribe(res => this.data = res)

  }

  deleteProduct(id: any){
    this.productsService.deleteProduct(id).subscribe()
    this.router.navigate(['/panel/statistic'])
  
  }

}
