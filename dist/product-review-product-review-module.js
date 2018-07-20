(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-review-product-review-module"],{

/***/ "./src/app/layout/product-review/product-review-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/product-review/product-review-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProductReviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewRoutingModule", function() { return ProductReviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_review_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-review.component */ "./src/app/layout/product-review/product-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _product_review_component__WEBPACK_IMPORTED_MODULE_2__["ProductReviewComponent"]
    }
];
var ProductReviewRoutingModule = /** @class */ (function () {
    function ProductReviewRoutingModule() {
    }
    ProductReviewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductReviewRoutingModule);
    return ProductReviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/product-review/product-review.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/product-review/product-review.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-nav-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/dashboard\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">{{product?.product_name}}</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <img class=\"card-img-top\" src=\"assets/images/category/replace.png\" alt=\"\">\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"product\">\n          <h3 class=\"title\">{{product?.product_name}}</h3>\n          <p class=\"desc\">\n            {{product?.product_description}}\n          </p>\n          <div class=\"price\">\n            {{product?.product_price | currency : 'INR'}}\n          </div>\n          <div class=\"quantity\">\n            <select class=\"custom-select\">\n              <option value=\"1\">{{product?.product_quantity}}</option>\n            </select>\n            <select class=\"custom-select\">\n              <option selected>{{product?.product_quantity_type}}</option>\n            </select>\n          </div>\n          <button class=\"btn custom-btn\" (click)=\"addToCart(product?.product_id_pk)\">\n            Add to cart\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"divider\"></div>\n<div class=\"divider\"></div>\n<div class=\"\">\n  <div class=\"container product-tabs\">\n    <div class=\"row\">\n      <ngb-tabset>\n        <ngb-tab title=\"Description\">\n          <ng-template ngbTabContent>\n            <h5>Overview</h5>\n            <p>\n              An intensive hair treatment to prevent hair loss, dandruff and premature graying. The secret to Indians’ lush, glossy hair\n              – this traditional Ayurvedic recipe consists of potent herbs extracted into pure Sesame oil and Milk. A natural\n              conditioner for lush hair growth that nourishes deeply while cooling the scalp. Also includes Indigo, Eclipta\n              Alba and Gooseberry to promote hair growth. Anti-fungal Licorice and antibacterial Balloon Vine prevent scalp\n              infections. The earthy scent of the oil has a calming, meditative effect that soothes frayed nerves, uplifts\n              mood and aids in a good night's rest.\n            </p>\n            <h5>Benefits</h5>\n            <ul>\n              <li>100% Natural</li>\n              <li>Relieves hair loss </li>\n              <li>Promotes hair growth </li>\n              <li>Prevents dandruff</li>\n              <li>Natural conditioner</li>\n              <li>Prevents scalp infections </li>\n              <li>Cools and uplifts</li>\n            </ul>\n            <h5>What to Expect</h5>\n            <p>\n              A nourishing, strong and earthy oil that requires massaging into hair and scalp for best results.\n            </p>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            Benifits\n          </ng-template>\n          <ng-template ngbTabContent>\n            <ul>\n              <li>100% Natural</li>\n              <li>Relieves hair loss </li>\n              <li>Promotes hair growth </li>\n              <li>Prevents dandruff</li>\n              <li>Natural conditioner</li>\n              <li>Prevents scalp infections </li>\n              <li>Cools and uplifts</li>\n            </ul>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"How to use\">\n          <ng-template ngbTabContent>\n            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Ingredients\">\n          <ng-template ngbTabContent>\n            <p>Ingredients</p>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Review\">\n          <ng-template ngbTabContent>\n            <p>Review</p>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Call a doctor\">\n          <ng-template ngbTabContent>\n            <p>Call a doctor</p>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/product-review/product-review.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/product-review/product-review.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-btn {\n  background: #d3b02b;\n  color: #fff; }\n\n.product {\n  padding: 10px; }\n\n.product h3 {\n  font-size: 22.5px;\n  text-align: left;\n  line-height: 12.5px;\n  letter-spacing: 0.2px; }\n\n.product .desc {\n  font-size: 14px;\n  text-align: left;\n  margin-top: 15px; }\n\n.product .view-more {\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 0.2px;\n  text-align: center;\n  width: 73px;\n  height: 23.5px;\n  background-color: #d3b02b;\n  border: none;\n  float: right; }\n\n.product .price {\n  font-size: 22.5px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.67;\n  letter-spacing: 0.2px;\n  text-align: left;\n  color: #0a0a0a; }\n\n.product .quantity {\n  margin: 35px 0px; }\n\n.product .quantity .custom-select {\n  width: 100px; }\n\n.product .quantity .custom-select:first-child {\n  margin-right: 15px; }\n\n.tab-content {\n  padding: 10px !important; }\n\n/********** tabs css **********/\n\n.nav-tabs {\n  border-bottom: 1px solid #d3b02b !important; }\n\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n  color: #ffc107;\n  background-color: #fff;\n  border-color: #ffc107 #ffc107 #fff; }\n\n.nav-tabs .nav-link {\n  color: #495057; }\n\n.product-tabs {\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/layout/product-review/product-review.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/product-review/product-review.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductReviewComponent = /** @class */ (function () {
    function ProductReviewComponent(productService, data, route, router) {
        this.productService = productService;
        this.data = data;
        this.route = route;
        this.router = router;
        this.selectedProduct = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
    }
    ProductReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.data.changePage("product review");
        this.route.params.subscribe(function (params) {
            _this.productName = params['productName'];
            _this.productId = params['id'];
            _this.getProduct(_this.productId);
        });
    };
    ProductReviewComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (response) {
            console.log(response);
            _this.product = response;
        });
    };
    ProductReviewComponent.prototype.addToCart = function (productid) {
        var products = [];
        var cartProducts;
        this.selectedProduct.next(productid);
        console.log(this.selectedProduct);
        console.log(productid);
        if (localStorage.getItem('cart')) {
            products = JSON.parse(localStorage.getItem('cart'));
            if (products.indexOf(productid) == -1) {
                products.push(productid);
                cartProducts = JSON.stringify(products);
                localStorage.setItem('cart', cartProducts);
            }
            this.data.getCart(products.length.toString());
        }
        else {
            products.push(productid);
            cartProducts = JSON.stringify(products);
            localStorage.setItem('cart', cartProducts);
            this.data.getCart(products.length.toString());
        }
        this.router.navigate(['/cart']);
    };
    ProductReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review',
            template: __webpack_require__(/*! ./product-review.component.html */ "./src/app/layout/product-review/product-review.component.html"),
            styles: [__webpack_require__(/*! ./product-review.component.scss */ "./src/app/layout/product-review/product-review.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductReviewComponent);
    return ProductReviewComponent;
}());



/***/ }),

/***/ "./src/app/layout/product-review/product-review.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/product-review/product-review.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductReviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewModule", function() { return ProductReviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _product_review_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-review-routing.module */ "./src/app/layout/product-review/product-review-routing.module.ts");
/* harmony import */ var _product_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-review.component */ "./src/app/layout/product-review/product-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductReviewModule = /** @class */ (function () {
    function ProductReviewModule() {
    }
    ProductReviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _product_review_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductReviewRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            declarations: [_product_review_component__WEBPACK_IMPORTED_MODULE_4__["ProductReviewComponent"]]
        })
    ], ProductReviewModule);
    return ProductReviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-review-product-review-module.js.map