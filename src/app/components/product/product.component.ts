import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  product: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private productsService: ProductsService,
               private router: Router
    ) {

    this.activatedRoute.params.subscribe( params => {
      this.productsService.getProduct(params.id).subscribe((data: any) => {
        this.product = data;
      }, (errorServicio) => {
        console.log(errorServicio);
      });
    });

  }

  addToCar(product: any) {
    console.log(product);
    this.productsService.car.push(product);
    this.router.navigate(['/car']);
  }

}
