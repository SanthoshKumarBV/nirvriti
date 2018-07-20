(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./src/app/layout/category/category-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/category/category-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component */ "./src/app/layout/category/category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]
    }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/category/category.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/category/category.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'category'\" [icon]=\"'fa-desktop'\"></app-page-header>\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n\n  <div class=\"page-header\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-10\">\n        <form #categoryForm=\"ngForm\" *ngIf=\"formAction=='add'\">\n          <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-3 col-form-label\">Category Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"name\" required name=\"name\" [(ngModel)]=\"category.category_name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm-3 col-form-label\"></label>\n            <div class=\"col-sm-3\">\n              <input type=\"button\" [disabled]='categoryForm.invalid' class=\"form-control btn btn-primary\" id=\"\" value=\"Add Category\" (click)=\"addCategory()\">\n            </div>\n          </div>\n        </form>\n\n        <form #categoryUpdateForm=\"ngForm\" *ngIf=\"formAction=='edit'\">\n          <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-3 col-form-label\">Category Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"hidden\" class=\"form-control\" required name=\"id\" [(ngModel)]=\"category.category_id_pk\">\n              <input type=\"text\" class=\"form-control\" required name=\"name\" [(ngModel)]=\"category.category_name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm-3 col-form-label\"></label>\n            <div class=\"col-sm-3\">\n              <input type=\"button\" [disabled]='categoryUpdateForm.invalid' class=\"form-control btn btn-primary\" id=\"\" value=\"Update Category\"\n                (click)=\"updateCategory()\">\n            </div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Category name</th>\n              <th scope=\"col\">edit</th>\n              <th scope=\"col\">delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let category of categories; let i = index\">\n              <th scope=\"row\">{{i+1}}</th>\n              <td>{{category.category_name}}</td>\n              <td>\n                <a class=\"btn btn-outline-info btn-sm\" (click)=\"editCategory(category.category_id_pk)\">edit</a>\n              </td>\n              <td>\n                <a class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteCategory(category.category_id_pk)\">delete</a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/category/category.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/category/category.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/category/category.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/category/category.component.ts ***!
  \*******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
        this.category = {};
        this.formAction = 'add';
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (response) {
            console.log(response);
            _this.categories = response['records'];
        });
    };
    CategoryComponent.prototype.getCategory = function (id) {
        var _this = this;
        this.categoryService.getCategory(id)
            .subscribe(function (response) {
            console.log(response);
            _this.category = response;
        });
    };
    CategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var data = this.category;
        this.categoryService.postCategory(data)
            .subscribe(function (response) {
            _this.getCategories();
            _this.category.category_name = '';
        });
    };
    CategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        var res = confirm("do you want to delete category");
        if (res == true) {
            console.log("delete");
            this.categoryService.deleteCategory(id)
                .subscribe(function (response) {
                console.log(response);
                _this.getCategories();
            });
        }
        else {
            console.log("dont delete");
        }
    };
    CategoryComponent.prototype.editCategory = function (id) {
        this.formAction = 'edit';
        this.getCategory(id);
    };
    CategoryComponent.prototype.updateCategory = function () {
        var _this = this;
        var data = this.category;
        this.categoryService.updateCategory(data)
            .subscribe(function (response) {
            _this.getCategories();
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/layout/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/layout/category/category.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/category/category.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/category/category.module.ts ***!
  \****************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/layout/category/category-routing.module.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component */ "./src/app/layout/category/category.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoryRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=category-category-module.js.map