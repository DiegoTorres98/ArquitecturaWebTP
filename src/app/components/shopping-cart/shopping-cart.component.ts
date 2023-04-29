import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Manzana', weight: 10, symbol: 'S/10.00'},
  {position: 2, name: 'Mandarina', weight: 40, symbol: 'S/11.00'},
  {position: 3, name: 'Platano', weight: 60, symbol: 'S/12.00'},
  {position: 4, name: 'Naranja', weight: 90, symbol: 'S/13.00'},
  {position: 5, name: 'Fresa', weight: 10, symbol: 'S/14.00'},
  {position: 6, name: 'Uva', weight: 12, symbol: 'S/15.00'},
  {position: 7, name: 'Mango', weight: 14, symbol: 'S/16.00'},
  {position: 8, name: 'Higo', weight: 15, symbol: 'S/12.00'},
  {position: 9, name: 'Papaya', weight: 18, symbol: 'S/11.00'},
  {position: 10, name: 'Granada', weight: 20, symbol: 'S/16.00'},
];

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})



export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  deleteItem() {
    this._snackBar.open('Producto Eliminado!', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar', 'login-snackbar']
    });
  }

  pay() {
    this._snackBar.open('Compra Exitosa!', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar', 'login-snackbar']
    });
  }

}
