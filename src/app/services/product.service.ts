import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department';
import { Product, SeasonProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  saved_products: Product[] | any = JSON.parse(localStorage.getItem('products') || '[]');
  url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getShoppingHistory(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/history_sales`);
  }

  getReservationsHistory(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/history_reservations`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.url}/departments`);
  }

  getSeasonProducts(): Observable<SeasonProduct[]> {
    return this.http.get<SeasonProduct[]>(`${this.url}/season_products`);
  }
/////////////
  getProducts(query: string, department: string): Observable<Product[]> {
    if(query && !department) {
      return this.http.get<Product[]>(`${this.url}/products?name=${query}`);
    }

    if(!query && department) {
      return this.http.get<Product[]>(`${this.url}/products?department=${department}`);
    }

    if(query && department) {
      return this.http.get<Product[]>(`${this.url}/products?name=${query}&department=${department}`);
    }

    return this.http.get<Product[]>(`${this.url}/products`);
  }

  createHistoryPurchaseProduct(products: Product[]){
    for(let item of products) {
      item.id = null;
      this.http.post(`${this.url}/history_sales`, {...item, id: null}).subscribe(resp => {
        this.saved_products = [];
        localStorage.setItem('products', JSON.stringify(this.saved_products));
      })
    }
  }

  reserveProduct(product: Product): Observable<Product> {
    product.id = null;
    return this.http.post<Product>(`${this.url}/history_reservations`, product);
  }
}
