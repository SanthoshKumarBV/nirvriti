import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: any;
  constructor(
    private http: HttpClient
  ) {
    this.url = environment.clientUrl;
  }

  getCategories() {
    return this.http.get(this.url + "category/read.php");
  }

  getCategory(id) {
    return this.http.get(this.url + "category/read_one.php?id=" + id);
  }

  postCategory(data) {
    data = JSON.stringify(data);
    return this.http.post(this.url + "category/create.php", data);
  }

  deleteCategory(id) {
    return this.http.post(this.url + "category/delete.php",{id:id});
  }

  updateCategory(data) {
    data = JSON.stringify(data);
    return this.http.post(this.url + "category/update.php", data);
  }

}
