import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: any [] = [];

  constructor( private productsService: ProductsService,
               private router: Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
      this.productsService.getProducts().subscribe((data: any) => {
      this.products = data;
    }, (errorServicio) => {
      console.log(errorServicio);
    });
  }

  verProduct( idx: number ) {
    this.router.navigate( ['/product', idx] );
  }

}
