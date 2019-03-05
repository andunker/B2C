import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent  } from './components/search/search.component';
import { CarComponent } from './components/car/car.component';
import { PayComponent } from './components/pay/pay.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'search/:termino/:tBusqueda', component: SearchComponent },
    { path: 'car', component: CarComponent },
    { path: 'pay', component: PayComponent },
    { path: 'order/:id', component: OrderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
