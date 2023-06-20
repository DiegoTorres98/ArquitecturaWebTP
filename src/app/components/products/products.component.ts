import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/department';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  searchInput: string = '';
  departmentSelect: string = '';
  departments: Department[] = [];

  products: Product[] = [];
  params!: any;
  constructor(private _snackBar: MatSnackBar, private productService: ProductService, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(resp => {
      this.params = resp;
    })
  }

  ngOnInit(): void {
    this.getDepartments();
    this.getProducts();
  }

  getDepartments() {
    this.productService.getDepartments().subscribe(resp => {
      this.departments = resp;
    })
  }

  getProducts() {
    this.productService.getProducts(this.params.q, this.params.dep).subscribe(resp => {
      this.products = resp;      
    })
  }

  getListProduct(prod: string){
    return prod.split(',');
  }

  getProductsFilter() {
    this.productService.getProducts(this.searchInput, this.departmentSelect).subscribe(resp => {
      this.products = resp;      
    })
  }

  addCart(product: Product) {
    if(product.amountKg >= product.minimumKg) {
      this.productService.saved_products = [...this.productService.saved_products, {
        ...product,
        total: product.amountKg * product.price
      }];
      localStorage.setItem('products', JSON.stringify(this.productService.saved_products));
  
      this._snackBar.open('Producto Agregado!', 'Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['success-snackbar', 'login-snackbar']
      });
    }
  }

  reserve(product: Product) {
    if(product.reservation !== "" && product.amountKg >= product.minimumKg) {
      this.productService.reserveProduct({...product, total: product.amountKg * product.price, id: null}).subscribe(resp => {
        this._snackBar.open('Producto Reservado!', 'Cerrar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar', 'login-snackbar']
        });
      })
    }
  }

}
