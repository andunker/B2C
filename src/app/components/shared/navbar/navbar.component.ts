import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router,
              private productsService: ProductsService) { }

  ngOnInit() {
  }

  searchProduct(termino: string, tBusqueda) {
    this.router.navigate(['/search', termino, tBusqueda]);
  }

  logout() {
    this.productsService.logout();
    this.router.navigate(['/home']);
  }

}
