
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

    constructor(private http: HttpClient) {
  }

  car: any[] = [];

  dataUser = [];
  token;

  getQuery(query: string) {

    const url = `http://localhost:5000/api/${query}`;

    return this.http.get(url);
  }

  postQuery(query: string, body: any) {

    const url = `http://localhost:5000/api/${query}`;
    return this.http.post(url, body );
  }

  getProducts() {
    return this.getQuery('productos');
  }

  getProduct(id: string) {
    return this.getQuery(`productos/id?id=${id}`);
  }

  buscarProductsByName(termino: string) {
    const body = { valor: termino };
    return this.postQuery(`productos/buscar/nombre`, body);

  }

  buscarProductsByDescription(termino: string) {
    const body = { valor : termino };
    return this.postQuery(`productos/buscar/descripcion`, body);

  }

  login(userEmail: string, userPassword: string) {
    const body = { userEmail, userPassword };
    return this.postQuery(`login`, body);

  }

  validarToken() {
    // tslint:disable-next-line:no-bitwise
    const fechaActual: number = new Date().getTime() / 1000 | 0 ;
    // tslint:disable-next-line:no-string-literal
    const fechaExpiracionToken = this.dataUser['exp'];
    const vidaToken = fechaExpiracionToken - fechaActual;

    if (vidaToken <= 0) {
      this.dataUser = [];
      this.token = '';
      this.car = [];
    }
  }

  logout() {
    this.dataUser = [];
    this.token = [];
    this.car = [];
  }

}
