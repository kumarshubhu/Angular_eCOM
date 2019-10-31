import { Cartproperty } from './../cartproperty';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  CartItems: Cartproperty[] = [];
  deletecart: Cartproperty;
  Total = 0;
  constructor(public cart: ProductsService) { }

  ngOnInit() {
    this.getCart();
  }

  public getCart(): void {
    this.cart.getCart().subscribe(item => {
    this.CartItems = item;
    this.cart.CartCount = this.CartItems.length;
    for (const i of this.CartItems) {
      this.Total += i.price * i.quantity;
    }
    });
  }

  Delete(d: number) {
    for (let i = 0; i <= this.CartItems.length; i++) {
      if (this.CartItems[i].id === d) {
        this.cart.deleteCart(d).subscribe(() => this.ngOnInit());
        this.cart.CartCount--;
      }
    }
  }

  bagTotal() {
    document.getElementById('bag').style.display = 'block';
  }
}
