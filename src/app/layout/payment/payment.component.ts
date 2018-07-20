import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {
  availability: boolean = false;
  availabilityMessage: any = ''
  pincode: any = '';
  products: any = [];
  pincodes: any = [
    { pincode: 560093, price: 50 },
    { pincode: 560092, price: 150 },
    { pincode: 560091, price: 100 },
    { pincode: 560060, price: 50 },
    { pincode: 560090, price: 50 },
  ]
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.getProducts();
  }

  checkAvailability() {
    console.log(this.pincode);
    for (var i = 0; i < this.pincodes.length; i++) {
      if (this.pincodes[i].pincode == this.pincode) {
        this.availability = true;
        this.availabilityMessage = "<span style='color:green;'>Available</span>";
        this.products.shipping_fee = this.pincodes[i].price;
        this.products.total = parseInt(this.pincodes[i].price)+this.products.subtotal;
        break;
      } else {
        this.availability = false;
        this.availabilityMessage = "<span style='color:red;'>Not Available</span>";
      }
    }
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
        this.products.subtotal = total;
        console.log(this.products);
      });
  }

}
