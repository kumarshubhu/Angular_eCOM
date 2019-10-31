import { Blueprint } from './../blueprint';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Cartproperty } from '../cartproperty';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.less']
})
export class PhoneComponent implements OnInit {
  myPhone: Blueprint[];
  ifItemInCartAlready = true;
  indexOfItemAlreadyInCart: number;
  cartItems: Cartproperty[];


  constructor(private product: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getPhones();
    this.getCart();
  }

  public addToCart(phone: Blueprint, Quantity: number) {
    const Count = Quantity;
    if (!this.product.CartCount) {
      this.product.createCart({ name: phone.name, price: phone.price, quantity: Count }).subscribe(() => this.ngOnInit());     
      return 0;
    }
    for (let i = 0; i < this.product.Cart.length; i++) {
      if (this.product.Cart[i].id === +phone.id) {
        this.ifItemInCartAlready = false;
        this.indexOfItemAlreadyInCart = i;
      }
    }
    if (this.ifItemInCartAlready) {
      // this.product.Cart.push({  Name, Price, Quantity: Count });
      this.product.CartCount++;
    } else {
      // tslint:disable-next-line: radix
      const count = Number.parseInt(Count.toString());
      // tslint:disable-next-line: radix
      let quant = Number.parseInt(this.product.Cart[this.indexOfItemAlreadyInCart].quantity.toString());
      quant += count;
      this.product.Cart[this.indexOfItemAlreadyInCart].quantity = quant;
    }
  }

  public routeToCart(): void {
    this.router.navigate(['/Cart']);
  }

  public add_NewItem(): void {
    document.getElementById('addproduct').style.display = 'block';
  }

  public AddItem(Name: string, Price: number, Rating: string): void {
    this.product.createPhone({ name: Name, price: Price, rating: Rating })
      .subscribe(() => this.ngOnInit());
    document.getElementById('addproduct').style.display = 'none';
  }

  public getPhones(): void {
    this.product.getPhones()
      .subscribe(phon => {
        this.myPhone = phon;
      });
  }

  public getCart(): void {
    this.product.getCart().subscribe(item => {
      this.cartItems = item;
      this.product.CartCount = this.cartItems.length;
    });
  }
  }

