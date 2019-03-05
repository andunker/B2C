import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Servicios
import { ProductsService } from './services/products.service';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './components/product/product.component';
import {SearchComponent  } from './components/search/search.component';

import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './components/car/car.component';
import { PayComponent } from './components/pay/pay.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductComponent,
    SearchComponent,
    CarComponent,
    PayComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
