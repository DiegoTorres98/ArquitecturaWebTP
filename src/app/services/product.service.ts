import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoryPurchase, HistoryReservation } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getShoppingHistory(): Observable<HistoryPurchase[]> {
    return this.http.get<HistoryPurchase[]>(`${this.url}/history_sales`);
  }

  getReservationsHistory(): Observable<HistoryReservation[]> {
    return this.http.get<HistoryReservation[]>(`${this.url}/history_reservations`);
  }
}
