import { Component, OnInit } from '@angular/core';
import { HistoryPurchase } from 'src/app/models/history';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {

  purchases: HistoryPurchase[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPurchases();
  }

  getPurchases() {
    return this.productService.getShoppingHistory().subscribe(resp => {
      this.purchases = resp;
    })
  }

}
