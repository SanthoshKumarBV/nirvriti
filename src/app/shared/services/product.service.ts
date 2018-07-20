import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: any;
  constructor(
    private http: HttpClient
  ) {
    this.url = environment.clientUrl;
  }

  getProducts() {
    return this.http.get(this.url + "product/read.php");
  }

  getProduct(id) {
    return this.http.get(this.url + "product/read_one.php?id=" + id);
  }

  postProduct(data) {
    data = JSON.stringify(data);
    return this.http.post(this.url + "product/create.php", data);
  }

  deleteProduct(id) {
    return this.http.post(this.url + "product/delete.php",{id:id});
  }

  updateProduct(data) {
    data = JSON.stringify(data);
    return this.http.post(this.url + "product/update.php", data);
  }

  searchProducts(keyword){
    return this.http.get(this.url + "product/search.php?s=" +keyword);
  }

}
