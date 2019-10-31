
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path: 'phone', component: PhoneComponent},
{ path: '',   redirectTo: '/phone', pathMatch: 'full' },
{path: 'Cart', component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
