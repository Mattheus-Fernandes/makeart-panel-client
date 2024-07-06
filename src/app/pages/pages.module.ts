import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { LayoutModule } from '../layout/layout.module';
import { StatistcComponent } from './panel/statistc/statistc.component';
import { NewProductComponent } from './panel/new-product/new-product.component';
import { ProductsComponent } from './panel/products/products.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { EditProductComponent } from './panel/edit-product/edit-product.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './panel/details/details.component';
import { SchedulingComponent } from './panel/scheduling/scheduling.component';
import { SchedulesComponent } from './panel/schedules/schedules.component';
import { ReplacementsComponent } from './panel/replacements/replacements.component';


@NgModule({
  declarations: [
    PanelComponent,
    StatistcComponent,
    NewProductComponent,
    ProductsComponent,
    LoginComponent,
    EditProductComponent,
    HomeComponent,
    DetailsComponent,
    SchedulingComponent,
    SchedulesComponent,
    ReplacementsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports: [
    PanelComponent,
    HomeComponent
  ]
})
export class PagesModule { }
