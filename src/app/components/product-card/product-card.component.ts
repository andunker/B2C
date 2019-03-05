import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = {};
  @Input() index: number;

  @Output() productSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.productSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verProduct() {
    this.router.navigate(['/product', this.product.id] );
    // this.productSeleccionado.emit( this.index );
  }

}
