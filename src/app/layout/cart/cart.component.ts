import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any;
  product: any;
  constructor(
    private productService: ProductService,
    private data: DataService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.product = [];
    this.getProducts();
  }

  getProducts() {

    var cartProducts;
    var total = 0;

    if (localStorage.getItem('cart')) {
      cartProducts = JSON.parse(localStorage.getItem('cart'));
    }

    this.productService.getProducts()
      .subscribe((response) => {
        console.log(response);
        this.products = response['records'];
        this.products = this.products.filter((el, i) => {
          if (cartProducts.indexOf(el.product_id_pk) != -1) {
            total = total + parseInt(el.product_price);
            return el;
          }
        });
        this.products.total = total;
        console.log(this.products);
      });
  }

  removeItemFromCart(productid) {
    var cartProducts;
    console.log(productid);
    if (localStorage.getItem('cart')) {
      cartProducts = JSON.parse(localStorage.getItem('cart'));
      var index = cartProducts.indexOf(productid);
      if (index > -1) {
        cartProducts.splice(index, 1);
      }

      localStorage.setItem("cart",JSON.stringify(cartProducts));
      this.data.getCart(cartProducts.length.toString())
      this.getProducts();
    }
  }

}
