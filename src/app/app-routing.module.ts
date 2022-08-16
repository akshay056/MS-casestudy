import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/products/products.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShoppingCartComponent },
  {path : 'products',component: ProductListComponent},
  {path : 'cart',component : CartComponent},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
