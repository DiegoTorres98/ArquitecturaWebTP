import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: string = '';
  departmentSelect: string = '';

  departments: Department[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.productService.getDepartments().subscribe(resp => {
      this.departments = resp;
    })
  }

  search() {
    this.router.navigate(['/productos'], { queryParams: {
      q: this.searchInput,
      dep: this.departmentSelect
    } })
  }

}
