import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [routerTransition()]
})
export class CategoryComponent implements OnInit {
  category: any = {};
  categories: any;
  formAction: any;
  constructor(
    private categoryService: CategoryService
  ) {
    this.formAction = 'add';
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((response) => {
        console.log(response);
        this.categories = response['records'];
      })
  }

  getCategory(id) {
    this.categoryService.getCategory(id)
      .subscribe((response) => {
        console.log(response);
        this.category = response;
      })
  }

  addCategory() {
    var data = this.category;
    this.categoryService.postCategory(data)
      .subscribe((response) => {
        this.getCategories();
        this.category.category_name = '';
      })
  }

  deleteCategory(id) {
    var res = confirm("do you want to delete category");
    if (res == true) {
      console.log("delete");
      this.categoryService.deleteCategory(id)
        .subscribe((response) => {
          console.log(response);
          this.getCategories();
        })
    } else {
      console.log("dont delete");
    }
  }

  editCategory(id) {
    this.formAction = 'edit';
    this.getCategory(id);
  }

  updateCategory() {
    var data = this.category;
    this.categoryService.updateCategory(data)
      .subscribe((response) => {
        this.getCategories();
      })
  }

}
