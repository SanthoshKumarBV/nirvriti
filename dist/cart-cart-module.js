(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/layout/cart/cart-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/cart/cart-routing.module.ts ***!
  \****************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/layout/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    }
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/cart/cart.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/cart/cart.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-nav-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/dashboard\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Cart</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-responsive\">\n            <tr *ngFor=\"let product of products\">\n              <td>\n                <img class=\"\" src=\"assets/images/category/replace.png\" alt=\"\" width=\"60\">\n              </td>\n              <td>\n                <h5>{{product.product_name}}</h5>\n                <h6> {{product.product_title}}</h6>\n              </td>\n              <td>\n                {{product.product_price | currency : 'INR'}}\n              </td>\n              <td>\n                {{product.product_quantity}} {{product.product_quantity_type}}\n              </td>\n              <td>\n                <button class=\"btn btn-sm btn-danger\" (click)=\"removeItemFromCart(product.product_id_pk)\">remove</button>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"4\">Order Total</th>\n              <th>{{products?.total | currency : 'INR'}}</th>\n            </tr>\n            <tr>\n              <th colspan=\"4\">\n              </th>\n              <th>\n                <button class=\"btn btn-lg btn-success\" routerLink=\"/payment\">Checkout</button>\n              </th>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/cart/cart.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/cart/cart.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---- home page ---*/\n.banner {\n  background-image: url('shape-30@3x.png'), url('shape-9@3x.png');\n  background-position: 100% 0%, 0%,100%;\n  margin-bottom: 57px; }\n.banner .container {\n  padding-bottom: 20px; }\n.banner .menu {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  background-color: #000000;\n  border-radius: 20px;\n  padding: 12px;\n  line-height: 12px;\n  margin-left: 15px; }\n.login, .register, .menu {\n  display: inline;\n  float: right; }\n.login, .register {\n  padding-top: 7px; }\n.banner .container .header-1 {\n  padding: 20px 0px 0px 0px; }\n.banner .container .header-2 h3 {\n  width: 200.5px;\n  height: 38.5px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  font-size: 19px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.32;\n  letter-spacing: 1px;\n  text-align: center;\n  color: #323237;\n  margin-top: -50px; }\n.menu {\n  position: relative; }\n.menu-container {\n  width: 270px;\n  background: #fff;\n  position: absolute;\n  right: 0px;\n  top: 41px;\n  padding: 10px;\n  z-index: 2; }\n.product {\n  padding: 10px; }\n.product h3 {\n  font-size: 22.5px;\n  text-align: left;\n  line-height: 12.5px;\n  letter-spacing: 0.2px; }\n.product .desc {\n  font-size: 14px;\n  text-align: left;\n  margin-top: 15px; }\n.product .view-more {\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 0.2px;\n  text-align: center;\n  width: 73px;\n  height: 23.5px;\n  background-color: #d3b02b;\n  border: none;\n  float: right; }\n.product .price {\n  font-size: 22.5px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.67;\n  letter-spacing: 0.2px;\n  text-align: left;\n  color: #0a0a0a; }\n.product .quantity {\n  margin: 35px 0px; }\n.product .quantity .custom-select {\n  width: 100px; }\n.product .quantity .custom-select:first-child {\n  margin-right: 15px; }\n.tab-content {\n  padding: 10px !important; }\n/********** tabs css **********/\n.nav-tabs {\n  border-bottom: 1px solid #d3b02b !important; }\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n  color: #ffc107;\n  background-color: #fff;\n  border-color: #ffc107 #ffc107 #fff; }\n.nav-tabs .nav-link {\n  color: #495057; }\n/*********** generic css ***********/\n.custom-btn {\n  position: relative;\n  background-color: #d3b02b;\n  border: none;\n  padding: 10px 35px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  max-width: 150px; }\n.btn-wrapper-top {\n  border: 1px solid #d3b02b;\n  position: absolute;\n  width: 100%;\n  height: 41px;\n  top: -8px;\n  left: -7px; }\n.divider {\n  display: block;\n  height: 20px; }\n.order-total {\n  border-top: 1px solid #dbdbdb;\n  border-bottom: 1px solid #dbdbdb;\n  padding: 20px 0px; }\n"

/***/ }),

/***/ "./src/app/layout/cart/cart.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/cart/cart.component.ts ***!
  \***********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(productService, data) {
        this.productService = productService;
        this.data = data;
    }
    CartComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.product = [];
        this.getProducts();
    };
    CartComponent.prototype.getProducts = function () {
        var _this = this;
        var cartProducts;
        var total = 0;
        if (localStorage.getItem('cart')) {
            cartProducts = JSON.parse(localStorage.getItem('cart'));
        }
        this.productService.getProducts()
            .subscribe(function (response) {
            console.log(response);
            _this.products = response['records'];
            _this.products = _this.products.filter(function (el, i) {
                if (cartProducts.indexOf(el.product_id_pk) != -1) {
                    total = total + parseInt(el.product_price);
                    return el;
                }
            });
            _this.products.total = total;
            console.log(_this.products);
        });
    };
    CartComponent.prototype.removeItemFromCart = function (productid) {
        var cartProducts;
        console.log(productid);
        if (localStorage.getItem('cart')) {
            cartProducts = JSON.parse(localStorage.getItem('cart'));
            var index = cartProducts.indexOf(productid);
            if (index > -1) {
                cartProducts.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cartProducts));
            this.data.getCart(cartProducts.length.toString());
            this.getProducts();
        }
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/layout/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/layout/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/layout/cart/cart.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/cart/cart.module.ts ***!
  \********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/layout/cart/cart-routing.module.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/layout/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CartRoutingModule"]
            ],
            declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map