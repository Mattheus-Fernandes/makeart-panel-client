import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-statistc',
  templateUrl: './statistc.component.html',
  styleUrls: ['./statistc.component.css']
})
export class StatistcComponent {

   //@ts-ignore
   private apiSubscription: Subscription

   public valueCards: Array<{value: number, text: string}> = []
   public productQty: Array<number> = []
   public salesQty: Array<number> = []
   public bestSellers: Array<any> = []
   public lastestRegistrations: Array<any> [any]
 
   constructor(private productsService: ProductsService){}
 
   ngOnInit(): void {
 
     this.apiSubscription = this.productsService.getData().subscribe({
       next: (res:any) => {
         
         
         res.forEach((e: any) => {
           this.productQty.push(e.amount)
           this.salesQty.push(e.sales)
         })
 
         const totalProduct = this.productQty.reduce((acc, curr) => acc + curr, 0)
         const totalSales = this.salesQty.reduce((acc, curr) => acc + curr, 0)
       
         this.valueCards = [
           {value: totalSales, text: "Total de vendas"},
           {value: totalProduct - totalSales, text: "Total de produtos"}
         ]
 
         this.bestSellers = res.filter((e: any) => e.sales >= 3)
       },
       error: err => err
     })
 
 
     this.apiSubscription = this.productsService.getLastestRegistrations().subscribe(res => this.lastestRegistrations = res)
     
   }
 
   ngOnDestroy(): void {
     
     this.apiSubscription.unsubscribe()
    
   }

}
