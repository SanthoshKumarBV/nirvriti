import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { DataService } from '../../shared/services/data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductReviewComponent implements OnInit {
  product: any;
  productId: any;
  productName: any;
  selectedProduct : Subject<any> = new Subject;

  constructor(
    private productService: ProductService,
    private data: DataService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.data.changePage("product review");
    this.route.params.subscribe(params => {
      this.productName = params['productName'];
      this.productId = params['id'];
      this.getProduct(this.productId);
    });
  }

  getProduct(id) {
    this.productService.getProduct(id)
      .subscribe((response) => {
        console.log(response);
        this.product = response;
      })
  }

  addToCart(productid) {
    var products = [];
    var cartProducts;
    this.selectedProduct.next(productid);
    console.log(this.selectedProduct);
    console.log(productid);
    if(localStorage.getItem('cart')){
      products = JSON.parse(localStorage.getItem('cart'));
      if(products.indexOf(productid)==-1){
        products.push(productid);
        cartProducts = JSON.stringify(products);
        localStorage.setItem('cart', cartProducts);
      } 
      this.data.getCart(products.length.toString());
    }else{
      products.push(productid);
      cartProducts = JSON.stringify(products);
      localStorage.setItem('cart', cartProducts);
      this.data.getCart(products.length.toString());
    }
    this.router.navigate(['/cart']);
  }

}
