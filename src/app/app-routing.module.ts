import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'orders' , component : MyOrdersComponent},
  {path : 'admin/orders' , component : AdminOrdersComponent},
  {path : 'admin/products' , component : AdminProductsComponent},
  {path : 'products' , component : ProductsComponent},
  {path : 'login' , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
