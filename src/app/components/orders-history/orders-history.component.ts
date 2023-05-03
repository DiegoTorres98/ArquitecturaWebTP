import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {

  purchases: Product[] = [];

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
