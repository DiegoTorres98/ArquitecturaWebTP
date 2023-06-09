import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { SeasonProductsComponent } from './components/season-products/season-products.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { ReservationsHistoryComponent } from './components/reservations-history/reservations-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MatTableModule } from '@angular/material/table';
import { ProductsComponent } from './components/products/products.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    SeasonProductsComponent,
    OrdersHistoryComponent,
    ReservationsHistoryComponent,
    ShoppingCartComponent,
    ProductsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
