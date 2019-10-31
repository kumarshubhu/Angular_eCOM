import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductsService} from './products.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    CartComponent
  ],
  imports: [NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
