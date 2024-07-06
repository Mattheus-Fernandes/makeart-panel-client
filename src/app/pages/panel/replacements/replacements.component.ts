import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-replacements',
  templateUrl: './replacements.component.html',
  styleUrls: ['./replacements.component.css']
})
export class ReplacementsComponent implements OnInit{

  public data: any
  public total: number = 0

  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    
    this.productsService.getData().subscribe(res => {
      this.data = res.filter((e: any) => e.amount - e.sales === 0)
      this.total = res.filter((e: any) => e.amount - e.sales === 0).length
    })


  }

}
