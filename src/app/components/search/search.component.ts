import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  products: any[] = [];
  termino: string;
  tBusqueda: string;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.termino = params.termino;
      this.tBusqueda = params.tBusqueda;

      if (params.tBusqueda === '1') {

        this.productsService.buscarProductsByName(params.termino).subscribe((data: any) => {
          this.products = data;
        }, (errorServicio) => {
          console.log(errorServicio);
        });

      } else {

        this.productsService.buscarProductsByDescription(params.termino).subscribe((data: any) => {
          this.products = data;
        }, (errorServicio) => {
          console.log(errorServicio);
        });

      }

    });

  }

}
