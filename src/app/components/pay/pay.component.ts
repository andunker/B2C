import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  toPay() {
   console.log('pagar');
  }

}
