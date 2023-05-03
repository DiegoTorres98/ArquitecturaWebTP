import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})



export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount_kg', 'total', 'action'];
  dataSource = JSON.parse(localStorage.getItem('products') || '[]');

  constructor(private _snackBar: MatSnackBar, private productService: ProductService) { }

  ngOnInit(): void {
  }

  deleteItem(product_id: number) {

    this.productService.saved_products = this.productService.saved_products.filter((item: Product) => item.id !== product_id);    
    this.dataSource = this.productService.saved_products;
    localStorage.setItem('products', JSON.stringify(this.productService.saved_products))
    this._snackBar.open('Producto Eliminado!', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar', 'login-snackbar']
    });
  }

  pay() {
    if(this.productService.saved_products.length > 0) {
      this.productService.createHistoryPurchaseProduct(this.productService.saved_products);
      this.dataSource = [];
      this._snackBar.open('Compra Exitosa!', 'Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['success-snackbar', 'login-snackbar']
      });
    }
  }

  getTotal(): number {
    if(this.productService.saved_products.length > 1) {
      return this.productService.saved_products.reduce((a: any,b: any) => a.total + b.total);
    }
    if(this.productService.saved_products.length === 1) {
      return this.productService.saved_products[0].total;
    }
    return 0;
  }

}
