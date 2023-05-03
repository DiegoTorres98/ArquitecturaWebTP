import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeasonProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-season-products',
  templateUrl: './season-products.component.html',
  styleUrls: ['./season-products.component.scss']
})
export class SeasonProductsComponent implements OnInit {

  products: SeasonProduct[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getSeasonProducts().subscribe(resp => {
      this.products = resp;
    })
  }

  search(query: string) {
    this.router.navigate(['/productos'], { queryParams: { q: query } })
  }

}
