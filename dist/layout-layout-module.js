(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h5>Nirvriti</h5>\n      <ul>\n        <li>\n          <a>\n            Pre Pregnancy & Fertility Care\n          </a>\n        </li>\n        <li>\n          <a>\n            Pregnancy Care\n          </a>\n        </li>\n        <li>\n          <a>\n            28 Days Post Pregnancy Care\n          </a>\n        </li>\n        <li>\n          <a>\n            Post Pregnancy Care\n          </a>\n        </li>\n        <li>\n          <a>\n            Baby Care Product\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-4\">\n      <h5>Support</h5>\n      <ul>\n          <li>\n            <a>\n              FAQ\n            </a>\n          </li>\n          <li>\n            <a>\n              Find a store\n            </a>\n          </li>\n          <li>\n            <a>\n              Explore Ayurveda\n            </a>\n          </li>\n          <li>\n            <a>\n              Contact Us\n            </a>\n          </li>\n        </ul>\n    </div>\n    <div class=\"col-md-4\">\n      <h5>Payment Options</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  border-top: 1px solid #eceaea;\n  border-bottom: 1px solid #eceaea;\n  padding: 30px 5px;\n  margin-top: 50px;\n  margin-bottom: 100px; }\n  .footer ul {\n    list-style: none;\n    padding: 0; }\n  .footer ul li a {\n      font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/components/footer/footer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"banner banner1\">\n    <div class=\"container\">\n        <div class=\"row header-2\">\n            <div class=\"col-xs-6 col-sm-2 col-md-3\">\n                <img class=\"logo\" routerLink=\"/dashboard\" src=\"assets/images/logo/logo.png\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-2 align-self-center\">\n                <ul class=\"menu\">\n                    <li class=\"primary-menu products-menu\">\n                        <a (click)=\"productListMenu()\">\n                            <i class=\"fa fa-th-large fa-fw m-r-5\"></i> Products </a>\n                        <div class=\"products-list\" *ngIf=\"menu\">\n                            <ul *ngIf=\"pageTitle=='dashboard'\">\n                                <li (click)=\"getProduct('prePregnancy')\">\n                                    <a data-href=\"#myModal\"> Pre pregnancy product</a>\n                                </li>\n                                <li (click)=\"getProduct('postPregnancy')\">\n                                    <a> Postanal Care product</a>\n                                </li>\n                                <li (click)=\"getProduct('postPregnancy')\">\n                                    <a> Post pregnancy product</a>\n                                </li>\n                                <li (click)=\"getProduct('babyCare')\">\n                                    <a> Baby Care product</a>\n                                </li>\n                            </ul>\n                            <ul *ngIf=\"pageTitle!='dashboard'\" (click)=\"hideMenu()\">\n                                <li routerLink=\"/product/Pre Pregnancy/10\">\n                                    <a> Pre pregnancy product</a>\n                                </li>\n                                <li routerLink=\"/product/Postanal pregnancy/8\">\n                                    <a> Postanal Care product</a>\n                                </li>\n                                <li routerLink=\"/product/Post pregnancy/8\">\n                                    <a> Post pregnancy product</a>\n                                </li>\n                                <li routerLink=\"/product/Baby Care/13\">\n                                    <a> Baby Care product</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-4 align-self-center\">\n\n                <div class=\"search\">\n                    <input type=\"serach\" name=\"search\" [(ngModel)]=\"search\" (keyup)=\"searchProducts(search)\" class=\"form-control\" placeholder=\"Search products here\"\n                    />\n                    <div class=\"search-result\" *ngIf=\"products\">\n                        <ul>\n                            <li *ngFor=\"let product of products\" routerLink=\"/product-review/{{product.product_name}}/{{product.product_id_pk}}\" (click)=\"products='';search=''\">\n                                {{product.product_name}} - <span>{{product.product_title}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-lg-3 align-self-center\">\n                <ul class=\"menu\">\n\n                    <li class=\"secondary-menu\">\n                        <a #loginModel (click)=\"openLoginModal()\">\n                            <i class=\"fa fa-sign-in\"></i>\n                            Login\n                        </a>\n                    </li>\n                    <li class=\"secondary-menu\">\n                        <a #myBtn (click)=\"openModal()\">\n                            <i class=\"fa fa-user-plus fa-fw m-r-5\"></i>\n                            Regsiter</a>\n                    </li>\n                    <li class=\"secondary-menu\">\n                        <a routerLink=\"/cart\">\n                            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> {{cart}} </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Register Modal -->\n<div id=\"myModal\" #myModal class=\"modal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <h5>Register with us</h5>\n        <div class=\"divider\"></div>\n        <form>\n            <div class=\"form-row\">\n                <div class=\"col-xs-6 col-sm-5 col-md-4 col-lg-3\">\n                    <label for=\"formGroupExampleInput\">First name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n                </div>\n                <div class=\"col-xs-6 col-sm-5 col-md-4 col-lg-3\">\n                    <label for=\"formGroupExampleInput\">Last name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"col-xs-6 col-sm-5 col-md-4 col-lg-3\">\n                    <label for=\"formGroupExampleInput\">Email</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n                <div class=\"col-xs-6 col-sm-5 col-md-4 col-lg-3\">\n                    <label for=\"formGroupExampleInput\">Phone</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"col-xs-6 col-sm-5 col-md-4 col-lg-3\">\n                    <label for=\"formGroupExampleInput\">Password</label>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"col-xs-6 col-sm-5 col-md-4 col-lg-3\">\n                    <label for=\"formGroupExampleInput\">Repeat Password</label>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Repeat Password\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <p class=\"agree\"> By Registering you agree to our Terms & Conditions </p>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"divider\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <p class=\"text-center signin-text\"> You can also signin with </p>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                    <span (click)=\"socialSignIn('facebook')\">\n                        <img src=\"assets/images/social/fb.png\" /> </span>\n                    <span class=\"social\">or</span>\n                    <span (click)=\"socialSignIn('google')\">\n                        <img src=\"assets/images/social/g.png\" /> </span>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"divider\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n\n                </div>\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-sm btn-primary float-right\">\n                        Register\n                    </button>\n                </div>\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-sm btn-primary float-right\" (click)=\"closeModal()\">\n                        Back\n                    </button>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"divider\"></div>\n        </form>\n    </div>\n\n</div>\n\n\n<!-- Login Modal -->\n<div id=\"myModal\" #loginModal class=\"modal login-modal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeLoginModal()\">&times;</span>\n        <div class=\"row\">\n            <div class=\"col-md-6 login-col\" style=\"border-right: 1px solid #999;\">\n                <h5>Login / Signup</h5>\n                <div class=\"divider\"></div>\n                <form>\n                    <div class=\"form-row\">\n                        <div class=\"col-xs-12\">\n                            <label for=\"formGroupExampleInput\">Enter your Email / Mobile Number</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email / Mobile Number\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"btn btn-sm btn-primary float-right\">\n                                <a>Continue</a>\n                                <div class=\"btn-wrapper\"></div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-1\"></div>\n                    </div>\n\n                    <div class=\"divider\"></div>\n                    <div class=\"divider\"></div>\n                    <div class=\"divider\"></div>\n\n                </form>\n            </div>\n            <div class=\"col-md-6 login-col\">\n                <h5 class=\"text-center\">Register With Us</h5>\n                <div class=\"divider\"></div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p class=\"text-center signin-text\"> You can also signin with </p>\n                    </div>\n                </div>\n                <div class=\"divider\"></div>\n                <div class=\"row\">\n                    <div class=\"col-md-12 text-center\">\n                        <span (click)=\"socialSignIn('facebook')\">\n                            <img src=\"assets/images/social/fb.png\" /> </span>\n                        <span class=\"social\">or</span>\n                        <span (click)=\"socialSignIn('google')\">\n                            <img src=\"assets/images/social/g.png\" /> </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---- home page ---*/\n*:focus {\n  outline: none; }\nsection {\n  position: relative; }\n.banner1 {\n  background-image: url('shape-30@3x.png'), url('shape-9@3x.png');\n  background-position: 100% 0%, 0%,100%;\n  margin-bottom: 0px; }\n.banner2 {\n  background-image: url('header-left2-3.png'), url('header2-3.png');\n  background-position: 100% 0%, 0%,100%;\n  margin-bottom: 0px; }\na {\n  color: #d3b02b; }\n.logo {\n  height: 90%; }\n.banner .container {\n  padding: 10px 0px; }\n.header-2 .menu {\n  display: inline;\n  padding: 0px; }\n.header-2 .menu li.primary-menu {\n    display: inline;\n    font-size: 14px;\n    padding: 12px 20px; }\n.header-2 .menu li.primary-menu a {\n      color: #fff;\n      font-weight: bold; }\n.header-2 .menu li.secondary-menu {\n    display: inline;\n    font-size: 14px;\n    padding: 12px 10px; }\n.header-2 .menu li.secondary-menu a {\n      color: #fff;\n      font-weight: bold; }\n.header-2 .menu li.products-menu {\n    background: #fff;\n    border-radius: 2px;\n    position: relative; }\n.header-2 .menu li.products-menu > a {\n      color: #d3b02b;\n      font-weight: bold;\n      text-transform: uppercase; }\n.header-2 .menu li.products-menu .products-list {\n      width: 208px;\n      position: absolute;\n      top: 80px;\n      left: 0px;\n      border-radius: 2px;\n      background: #d3b02b;\n      box-shadow: 0px 1px 0px 0px rgba(36, 38, 47, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0);\n      z-index: 1000000000; }\n.header-2 .menu li.products-menu .products-list ul {\n        padding: 0px;\n        margin: 0px;\n        list-style: none; }\n.header-2 .menu li.products-menu .products-list ul li {\n          padding: 15px 25px;\n          border-bottom: 1px solid #e0dede; }\n.header-2 .menu li.products-menu .products-list ul li a {\n            color: #fff;\n            font-weight: normal; }\n.header-2 .menu li.products-menu .products-list ul li :hover a {\n            color: #ca2027; }\n.header-2 .search input {\n  width: 100%;\n  height: 45px;\n  padding: 10px;\n  background-color: #ffffff;\n  border: solid 0.5px #cccccc;\n  border-radius: 5px;\n  font-size: 14px; }\n.header-2 .search input:focus {\n  outline: 0px solid; }\n.header-2 .search-result {\n  position: absolute;\n  z-index: 1000000;\n  background: #fff;\n  width: calc( 100% - 30px);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 0 4px 16px rgba(20, 23, 28, 0.25); }\n.header-2 .search-result ul {\n    margin: 0;\n    padding: 0px;\n    list-style: none; }\n.header-2 .search-result ul li {\n      padding: 10px;\n      color: #d3b02b;\n      cursor: pointer;\n      font-size: 14px; }\n.header-2 .search-result ul li:hover {\n        opacity: 0.75;\n        color: #935e24; }\n.header-2 .search-result ul li:hover span {\n          color: #d3b02b; }\n.header-2 .search-result ul li span {\n        font-size: 12px;\n        color: #935e24; }\n/********* Modal *********/\n/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  padding-bottom: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  border-radius: 0px; }\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  text-align: right;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n.login-modal .modal-content {\n  padding: 0px; }\n.login-modal .close {\n  position: absolute;\n  right: 15px;\n  z-index: 1000000; }\n.login-modal .login-col {\n  padding: 40px 50px; }\n.login-modal .login-col:first-child {\n  border-right: 1px solid #d5d5d5; }\n.social-links {\n  position: absolute;\n  right: 10px;\n  bottom: 10px; }\n.social-links img {\n    display: inherit;\n    padding: 10px 0px; }\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n.form-row {\n  margin-bottom: 25px; }\n.form-row .form-control {\n    border-radius: 0px; }\n.agree {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.36;\n  letter-spacing: 0.2px;\n  text-align: left;\n  color: #ca2027; }\n.signin-text {\n  font-size: 12px;\n  color: #999999; }\n.social {\n  padding: 0px 30px;\n  font-weight: bold; }\n.form-row div:nth-child(2) {\n  margin-left: 30px; }\n.loginModal {\n  border-right: #999999; }\n.cart {\n  position: absolute;\n  bottom: 0px; }\n.cart .cart-number {\n    position: relative;\n    top: -15px;\n    left: 18px;\n    color: #fff; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, categoryService, productService, data, socialAuthService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
        this.data = data;
        this.socialAuthService = socialAuthService;
        this.pushRightClass = 'push-right';
        this.menuContainer = false;
        this.categories = [];
        this.menu = false;
        this.products = [];
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the modal
        var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var str = window.location.href;
        var n = str.search("dashboard");
        if (n != -1) {
            this.pageTitle = 'dashboard';
        }
        else {
            this.pageTitle = '';
        }
        this.data.currentPage.subscribe(function (page) {
            console.log(page);
            _this.pageTitle = page;
        });
        this.data.currentCart.subscribe(function (cart) {
            console.log(cart);
            _this.cart = cart;
        });
        this.getCategories();
        this.getCart();
    };
    HeaderComponent.prototype.getCart = function () {
        var cartProducts;
        if (localStorage.getItem('cart')) {
            var products = JSON.parse(localStorage.getItem('cart'));
            this.data.getCart(products.length.toString());
        }
    };
    HeaderComponent.prototype.productListMenu = function () {
        if (this.menu) {
            this.menu = false;
        }
        else {
            this.menu = true;
        }
    };
    HeaderComponent.prototype.hideMenu = function () {
        this.menu = false;
    };
    HeaderComponent.prototype.getProduct = function (productType) {
        this.menu = false;
        $('html, body').animate({
            scrollTop: $("#" + productType).offset().top
        }, 2000);
    };
    HeaderComponent.prototype.searchProducts = function (keyword) {
        var _this = this;
        console.log(keyword);
        if (keyword != '') {
            this.productService.searchProducts(keyword).subscribe(function (response) {
                console.log(response);
                _this.products = response['records'];
            });
        }
        else {
            this.products = [];
        }
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.prototype.toggleMenu = function () {
        if (this.menuContainer)
            this.menuContainer = false;
        else
            this.menuContainer = true;
    };
    HeaderComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (response) {
            console.log(response);
            _this.categories = response['records'];
        });
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.menuContainer = false;
    };
    HeaderComponent.prototype.openModal = function () {
        this.myModal.nativeElement.style.display = "block";
    };
    HeaderComponent.prototype.closeModal = function () {
        this.myModal.nativeElement.style.display = "none";
    };
    HeaderComponent.prototype.openLoginModal = function () {
        this.loginModal.nativeElement.style.display = "block";
    };
    HeaderComponent.prototype.closeLoginModal = function () {
        this.loginModal.nativeElement.style.display = "none";
    };
    HeaderComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "myBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "myModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "loginBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "loginModal", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <div class=\"list-group\">\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}\n        </a>\n        <a routerLink=\"/category\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Category' | translate }}\n        </a>\n        <a routerLink=\"/product\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Product' | translate }}\n        </a>\n        <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Charts' | translate }}\n        </a>\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;{{ 'Tables' | translate }}\n        </a>\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;{{ 'Forms' | translate }}\n        </a>\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;{{ 'Bootstrap Element' | translate }}\n        </a>\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;{{ 'Bootstrap Grid' | translate }}\n        </a>\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>&nbsp;{{ 'Component' | translate }}\n        </a>\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                <span><i class=\"fa fa-plus\"></i>&nbsp; {{ 'Menu' | translate }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;{{ 'Blank Page' | translate }}\n        </a>\n        <a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\" >\n            {{ 'More Theme' | translate }}\n        </a>\n        <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\n                    <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'category', loadChildren: './category/category.module#CategoryModule' },
            { path: 'product/:categoryName/:id', loadChildren: './product/product.module#ProductModule' },
            { path: 'product-review/:productName/:id', loadChildren: './product-review/product-review.module#ProductReviewModule' },
            { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.page-nav-header {\n  margin-top: 25px; }\n\na:hover {\n  opacity: 0.6; }\n\n.form-control:focus {\n  box-shadow: none; }\n\n.btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n.btn-primary {\n  background: #d3b02b;\n  border-color: #d3b02b; }\n\n.btn-primary:hover {\n  background: #d3b02b;\n  opacity: 0.75;\n  border-color: #fff; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        console.log('layout');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LayoutComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LayoutComponent.prototype, "icon", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/layout/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"].forRoot()
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map