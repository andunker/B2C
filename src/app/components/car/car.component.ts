import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private productsService: ProductsService,
              private router: Router
  ) {
  }

  ngOnInit() {
  }
  confirm() {
    if (this.productsService.dataUser.length === 0) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/pay']);
    }

  }

  delete(product: any) {
    this.productsService.car.splice(this.productsService.car.indexOf(product), 1);
  }

  cleanCar() {
    this.productsService.car = [];
  }

}
