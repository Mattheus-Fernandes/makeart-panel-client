import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { StatistcComponent } from './panel/statistc/statistc.component';
import { NewProductComponent } from './panel/new-product/new-product.component';
import { ProductsComponent } from './panel/products/products.component';
import { EditProductComponent } from './panel/edit-product/edit-product.component';
import { DetailsComponent } from './panel/details/details.component';
import { SchedulingComponent } from './panel/scheduling/scheduling.component';
import { SchedulesComponent } from './panel/schedules/schedules.component';
import { ReplacementsComponent } from './panel/replacements/replacements.component';


const routes: Routes = [
  {path: "panel", redirectTo: "/panel/statistic", pathMatch: "full"},
  {path: "panel", component: PanelComponent, children: [
    {path: "statistic", component: StatistcComponent},
    {path: "new-product", component: NewProductComponent},
    {path: "edit-product/:id", component: EditProductComponent},
    {path: "details/:id", component: DetailsComponent},
    {path: "products", component: ProductsComponent},
    {path: "scheduling", component: SchedulingComponent},
    {path: "schedules", component: SchedulesComponent},
    {path: "replacements", component: ReplacementsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }