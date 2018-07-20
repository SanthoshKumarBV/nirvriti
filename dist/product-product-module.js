(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/layout/product/product-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/product/product-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/layout/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/product/product.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/product/product.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-nav-header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/dashboard\">Home</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{category}}</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"product\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"title\">{{category}} </h3>\n                <p class=\"desc\">\n                    In Ayurveda, fertility is at the deepest level of health. Everything that is consumed is transformed into shukra, “the seed\n                    of life”. In Ayurvedic view, poor diet, digestion or internal toxicity and stress are the frequent causes\n                    of fertility problems. Ayurvedic detox protocols are used if the fertility blocker is determined to be\n                    “ama” (toxins) in the system. Many factors contribute to toxins including: excess weight, fibroids, poor\n                    digestion, constipation or anaemia. Ayurveda takes a holistic view about health and treats the body as\n                    a whole instead of an individual ailment. Some of the treatment protocols and herbs proven useful are:\n                    Swedanam, Banyan tree bark, Ashwagandha, Shatavari, Triphala, Phala Gritam etc. Ayurveda also recommends\n                    a strict diet for those who are having difficulty in conception. Apart from avoiding spicy and excessively\n                    salty food, it recommends including the following foods in the patients diet: • Almonds • Fresh Vegetables\n                    • Whole Grains • Dairy products such as milk • Fresh Fruits • Dried Fruits All these foods help provide\n                    nutrition to the shukra dhatu, which in turn can help a person conceive.\n                </p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"header\"> Buy products that help with fertility\n                </h5>\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let product of products\" routerLink=\"/product-review/{{product.product_name}}/{{product.product_id_pk}}\">\n                        <div class=\" card card-default card-course-min card-course\">\n                            <img class=\"card-img-top card-img-max\" src=\"assets/images/products/replace.png\" alt=\"Card image cap\">\n                            <div class=\"card-block animated fadeIn card-course-description\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"m-b-30\">\n                                        <span class=\"semi-bold\">{{product.product_name}}</span>\n                                    </h5>\n                                    <p>\n                                        {{product.product_title}}\n                                    </p>\n                                    <p>{{product.product_quantity}} {{product.product_quantity_type}}, {{product.product_price | currency : 'INR'}}</p>\n                                </div>\n\n                                <div class=\"card-footer\">\n\n                                    <a routerLink=\"/product-review/{{product.product_name}}/{{product.product_id_pk}}\">Know more\n                                        <i class=\"fa fa-angle-double-right m-l-5\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/product/product.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/product/product.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-wraper {\n  min-height: 260px; }\n\n.product h5.header {\n  padding: 20px 10px;\n  text-align: center;\n  font-weight: 600; }\n\n.product h5.header a.view-more {\n    font-size: 14px;\n    color: blue;\n    margin-left: 10px; }\n\n.product h5.header::after {\n    content: '.';\n    display: block;\n    height: 1px;\n    width: 90px;\n    margin: 18px auto;\n    text-indent: -9999px;\n    border-top: 3px solid #cb1a21; }\n\n.product .card {\n  padding: 0px;\n  margin-bottom: 35px;\n  box-shadow: 0 4px 16px rgba(20, 23, 28, 0.25); }\n"

/***/ }),

/***/ "./src/app/layout/product/product.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/product/product.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, data, route) {
        this.productService = productService;
        this.data = data;
        this.route = route;
        this.product = {};
        this.formAction = 'add';
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.data.changePage("product");
        this.route.params.subscribe(function (params) {
            _this.category = params['categoryName'];
            _this.categoryId = params['id'];
            //this.getProduct(this.categoryId);
            _this.getProducts();
        });
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (response) {
            console.log(response);
            _this.products = response['records'];
            _this.products = _this.products.filter(function (el, i) {
                return el.product_category_id_fk == _this.categoryId;
            });
            console.log(_this.products);
        });
    };
    ProductComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (response) {
            console.log(response);
            _this.product = response;
        });
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        var data = this.product;
        this.productService.postProduct(data)
            .subscribe(function (response) {
            _this.getProducts();
            _this.product.product_name = '';
        });
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        var res = confirm("do you want to delete product");
        if (res == true) {
            console.log("delete");
            this.productService.deleteProduct(id)
                .subscribe(function (response) {
                console.log(response);
                _this.getProducts();
            });
        }
        else {
            console.log("dont delete");
        }
    };
    ProductComponent.prototype.editProduct = function (id) {
        this.formAction = 'edit';
        this.getProduct(id);
    };
    ProductComponent.prototype.updateProduct = function () {
        var _this = this;
        var data = this.product;
        this.productService.updateProduct(data)
            .subscribe(function (response) {
            _this.getProducts();
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/layout/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/layout/product/product.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/layout/product/product.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/product/product.module.ts ***!
  \**************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/layout/product/product-routing.module.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.component */ "./src/app/layout/product/product.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map