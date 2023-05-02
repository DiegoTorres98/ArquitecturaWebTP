import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SeasonProductsComponent } from './components/season-products/season-products.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { ReservationsHistoryComponent } from './components/reservations-history/reservations-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegisterComponent
  },
  {
    path: 'productos-temporada',
    component: SeasonProductsComponent
  },
  {
    path: 'buscar',
    component: SearchComponent
  },
  {
    path: 'historial-pedidos',
    component: OrdersHistoryComponent
  },
  {
    path: 'historial-reservas',
    component: ReservationsHistoryComponent
  },
  {
    path: 'carrito',
    component: ShoppingCartComponent
  },
  {
    path: 'productos',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
