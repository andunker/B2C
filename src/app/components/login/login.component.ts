import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
  }

  login(userEmail, userPassword) {

    this.productsService.login(userEmail, userPassword).subscribe((data: any) => {

      const token = data.userToken;
      this.productsService.token = token;
      this.productsService.dataUser = jwt_decode(token);
      console.log(this.productsService.token);
      console.log(this.productsService.dataUser);
      console.log('logueado');

  }, (errorServicio) => {
      console.log(errorServicio);
    });

    this.router.navigate(['/home']);
  }

}
