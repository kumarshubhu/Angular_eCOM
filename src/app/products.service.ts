import { Cartproperty } from './cartproperty';
import { Blueprint } from './blueprint';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://localhost:5001/api/phones';
  carturl = 'https://localhost:5001/api/carts';
  public CartCount: number;
  public Cart: Cartproperty[];

  constructor(private http: HttpClient) {
    this.Cart = [];
    this.CartCount = 0;
  }

  public getPhones(): Observable<Blueprint[]> {
    return this.http.get<Blueprint[]>(this.url);
  }

  public createPhone(phone: Blueprint) {
    return this.http.post(this.url, phone);
  }

  public getCart(): Observable<Cartproperty[]> {
    return this.http.get<Cartproperty[]>(this.carturl);
  }

  public createCart(cart: Cartproperty) {
    return this.http.post(this.carturl, cart);
  }

  public deleteCart(id: number) {
    return this.http.delete(`${this.carturl}/${id}`, { responseType: 'text' })
  }
}
