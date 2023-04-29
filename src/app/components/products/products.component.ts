import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  buyProduct() {
    this._snackBar.open('Producto Comprado!', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar', 'login-snackbar']
    });
  }

  addCart() {
    this._snackBar.open('Producto Agregado!', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar', 'login-snackbar']
    });
  }

  reserve() {
    this._snackBar.open('Producto Reservado!', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar', 'login-snackbar']
    });
  }

}
