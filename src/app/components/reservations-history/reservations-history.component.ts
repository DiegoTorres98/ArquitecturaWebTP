import { Component, OnInit } from '@angular/core';
import { HistoryReservation } from 'src/app/models/history';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reservations-history',
  templateUrl: './reservations-history.component.html',
  styleUrls: ['./reservations-history.component.scss']
})
export class ReservationsHistoryComponent implements OnInit {

  reservations: HistoryReservation[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.productService.getReservationsHistory().subscribe(resp => {
      this.reservations = resp;
    })
  }

}
