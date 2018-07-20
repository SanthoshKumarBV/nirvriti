import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProductService } from '../../shared/services/product.service';
import { DataService } from '../../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  category: any;
  categoryId: any;
  product: any = {};
  products: any;
  formAction: any;
  constructor(
    private productService: ProductService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.formAction = 'add';
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.data.changePage("product");
    this.route.params.subscribe(params => {
      this.category = params['categoryName'];
      this.categoryId = params['id'];
      //this.getProduct(this.categoryId);
      this.getProducts();
    });

  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((response) => {
        console.log(response);
        this.products = response['records'];
        this.products = this.products.filter((el, i) => {
          return el.product_category_id_fk == this.categoryId;
        });
        console.log(this.products);
      });
  }

  getProduct(id) {
    this.productService.getProduct(id)
      .subscribe((response) => {
        console.log(response);
        this.product = response;
      })
  }

  addProduct() {
    var data = this.product;
    this.productService.postProduct(data)
      .subscribe((response) => {
        this.getProducts();
        this.product.product_name = '';
      })
  }

  deleteProduct(id) {
    var res = confirm("do you want to delete product");
    if (res == true) {
      console.log("delete");
      this.productService.deleteProduct(id)
        .subscribe((response) => {
          console.log(response);
          this.getProducts();
        })
    } else {
      console.log("dont delete");
    }
  }

  editProduct(id) {
    this.formAction = 'edit';
    this.getProduct(id);
  }

  updateProduct() {
    var data = this.product;
    this.productService.updateProduct(data)
      .subscribe((response) => {
        this.getProducts();
      })
  }

}
