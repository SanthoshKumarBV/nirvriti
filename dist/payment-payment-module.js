(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./src/app/layout/payment/payment-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/payment/payment-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.component */ "./src/app/layout/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _payment_component__WEBPACK_IMPORTED_MODULE_2__["PaymentComponent"]
    }
];
var PaymentRoutingModule = /** @class */ (function () {
    function PaymentRoutingModule() {
    }
    PaymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PaymentRoutingModule);
    return PaymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/payment/payment.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/payment/payment.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-nav-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/dashboard\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Payment</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <input type=\"text\" class=\"form-control\" name=\"pincode\" [(ngModel)]=\"pincode\" maxlength=\"6\" pattern=\"0-9\" placeholder=\"Enter your area pin code\" />\n      </div>\n      <div class=\"col-md-2\">\n        <button class=\"btn btn-md btn-primary\" (click)=\"checkAvailability()\">Check Availability</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div [class]=\"availability\" *ngIf=\"pincode!=''\" [innerHTML]='availabilityMessage'> </div>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"availability\">\n      <div class=\"col-md-6\">\n        <div class=\"divider\"></div>\n        <div class=\"order-container\">\n          <h5 class=\"heading5\">Your Order</h5>\n          <div class=\"divider\"></div>\n          <table class=\"table\">\n            <tr>\n              <td>Product</td>\n              <td class=\"text-right\">Total</td>\n            </tr>\n            <tr *ngFor=\"let product of products\">\n              <td>{{product.product_name}}</td>\n              <td class=\"text-right\">{{product.product_price | currency : 'INR'}}</td>\n            </tr>\n            <tr>\n              <td>Subtotal</td>\n              <td class=\"text-right\">{{products.subtotal | currency : 'INR'}}</td>\n            </tr>\n            <tr>\n              <td>Shipping</td>\n              <td class=\"text-right\">{{products?.shipping_fee | currency : 'INR'}}</td>\n            </tr>\n            <tr>\n              <td>Total</td>\n              <td class=\"text-right\">{{products.total | currency : 'INR'}}</td>\n            </tr>\n          </table>\n          <div class=\"divider\"></div>\n          <div class=\"row payment-type\">\n            <div class=\"col-md-12\">\n              <input type=\"radio\" name=\"paymentType\">\n              <span> PAYTM</span>\n            </div>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"row payment-type\">\n            <div class=\"col-md-12\">\n              <input type=\"radio\" name=\"paymentType\">\n              <span> CASH ON DELIEVERY</span>\n            </div>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"row payment-type\">\n            <div class=\"col-md-12\">\n              <input type=\"radio\" name=\"paymentType\">\n              <span> CREDIT CARD</span>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"divider\"></div>\n        <h5 class=\"heading5\">Billing Address</h5>\n        <form>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">First name</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Last name</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Email</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Address 1</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Address 2</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Postcode</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Town/City</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat Password\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Town/City</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat Password\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n              <label for=\"formGroupExampleInput\">Mobile</label>\n              <input type=\"number\" class=\"form-control\" placeholder=\"Repeat Password\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-xs-12 col-sm-10 col-md-10 col-lg-10 terms\">\n              <input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"agree\"> Terms and condition\n            </div>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary float-right\" [disabled]=\"!agree\" *ngIf=\"availability\">\n                Place Order\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/payment/payment.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/payment/payment.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row {\n  margin: 18px 0px; }\n  .form-row input {\n    border-radius: 0px; }\n  .terms {\n  color: #ca2026;\n  font-size: 14px; }\n  .order-container {\n  width: 100%;\n  border: 1px solid #d3b02b;\n  padding: 20px; }\n  .divider {\n  display: block;\n  height: 20px; }\n  .heading5 {\n  font-weight: bold; }\n  .payment-type {\n  font-size: 14px; }\n  label {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.36;\n  letter-spacing: 0.2px;\n  text-align: left;\n  color: #999999; }\n  .true {\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 2px; }\n  .false {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 2px; }\n  /*********** generic css ***********/\n  .custom-btn {\n  position: relative;\n  background-color: #d3b02b;\n  border: none;\n  padding: 10px 35px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  max-width: 150px; }\n  .btn-wrapper-top {\n  border: 1px solid #d3b02b;\n  position: absolute;\n  width: 100%;\n  height: 41px;\n  top: -8px;\n  left: -7px; }\n"

/***/ }),

/***/ "./src/app/layout/payment/payment.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/payment/payment.component.ts ***!
  \*****************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(productService) {
        this.productService = productService;
        this.availability = false;
        this.availabilityMessage = '';
        this.pincode = '';
        this.products = [];
        this.pincodes = [
            { pincode: 560093, price: 50 },
            { pincode: 560092, price: 150 },
            { pincode: 560091, price: 100 },
            { pincode: 560060, price: 50 },
            { pincode: 560090, price: 50 },
        ];
    }
    PaymentComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.getProducts();
    };
    PaymentComponent.prototype.checkAvailability = function () {
        console.log(this.pincode);
        for (var i = 0; i < this.pincodes.length; i++) {
            if (this.pincodes[i].pincode == this.pincode) {
                this.availability = true;
                this.availabilityMessage = "<span style='color:green;'>Available</span>";
                this.products.shipping_fee = this.pincodes[i].price;
                this.products.total = parseInt(this.pincodes[i].price) + this.products.subtotal;
                break;
            }
            else {
                this.availability = false;
                this.availabilityMessage = "<span style='color:red;'>Not Available</span>";
            }
        }
    };
    PaymentComponent.prototype.getProducts = function () {
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
            _this.products.subtotal = total;
            console.log(_this.products);
        });
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/layout/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/layout/payment/payment.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/layout/payment/payment.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/payment/payment.module.ts ***!
  \**************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/layout/payment/payment-routing.module.ts");
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.component */ "./src/app/layout/payment/payment.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"]]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map