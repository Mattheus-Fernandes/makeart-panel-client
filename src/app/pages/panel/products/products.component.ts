import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public data:any
  public search: string = ''
  public filteredData: any

  constructor(private productsService: ProductsService){}
  
  ngOnInit(): void {
    
    this.productsService.getData().subscribe({
      next: res => {
        this.data = res
        this.filteredData = [...this.data]
      }
    })
  }

  filterProducts() {
    if (this.search) {
      this.filteredData = this.data.filter((product: any) => {
        return product.product.toLowerCase().includes(this.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(this.search.toLowerCase())
    });
    } else {
      this.filteredData = [...this.data];
    }
  }

  deleteProduct(id: any){
    this.productsService.deleteProduct(id).subscribe(() => {
      this.filteredData = this.filteredData.filter((e: any) => e._id !== id)
    })
  }

}
