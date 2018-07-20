import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { DataService } from '../../../shared/services/data.service';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';

declare var $;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    cart: string;
    pushRightClass: string = 'push-right';
    pageTitle: any;
    @Input() heading: string;
    @Input() icon: string;
    @ViewChild('myBtn') myBtn: ElementRef;
    @ViewChild('myModal') myModal: ElementRef;
    @ViewChild('loginBtn') loginBtn: ElementRef;
    @ViewChild('loginModal') loginModal: ElementRef;
    menuContainer: any = false;
    categories: any = [];
    menu: any = false;
    products: any = [];

    constructor(
        private translate: TranslateService,
        public router: Router,
        private categoryService: CategoryService,
        private productService: ProductService,
        private data: DataService,
        private socialAuthService: AuthService
    ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {

        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        var str = window.location.href;
        var n = str.search("dashboard");
        if (n != -1) {
            this.pageTitle = 'dashboard'
        } else {
            this.pageTitle = ''
        }

        this.data.currentPage.subscribe(
            page => {
                console.log(page);
                this.pageTitle = page;
            }
        );

        this.data.currentCart.subscribe(
            cart => {
                console.log(cart);
                this.cart = cart;
            }
        )

        this.getCategories();
        this.getCart();
    }

    getCart() {
        var cartProducts;
        if (localStorage.getItem('cart')) {
            var products = JSON.parse(localStorage.getItem('cart'));
            this.data.getCart(products.length.toString());
        }
    }

    productListMenu() {
        if (this.menu) {
            this.menu = false;
        } else {
            this.menu = true;
        }
    }

    hideMenu() {
        this.menu = false;
    }

    getProduct(id) {
        this.menu = false;
        $('html, body').animate({
            scrollTop: $("#productCategory"+id).offset().top
        }, 2000);
    }

    searchProducts(keyword) {
        console.log(keyword);
        if (keyword != '') {
            this.productService.searchProducts(keyword).subscribe((response) => {
                console.log(response);
                this.products = response['records'];
            });
        }else{
            this.products = [];
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    toggleMenu() {
        if (this.menuContainer)
            this.menuContainer = false;
        else
            this.menuContainer = true;
    }

    getCategories() {
        this.categoryService.getCategories()
            .subscribe((response) => {
                console.log(response);
                this.categories = response['records'];
            })
    }

    closeMenu() {
        this.menuContainer = false;
    }

    openModal() {
        this.myModal.nativeElement.style.display = "block";
    }

    closeModal() {
        this.myModal.nativeElement.style.display = "none";
    }

    openLoginModal() {
        this.loginModal.nativeElement.style.display = "block";
    }

    closeLoginModal() {
        this.loginModal.nativeElement.style.display = "none";
    }

    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }

        this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                console.log(socialPlatform + " sign in data : ", userData);
            }
        );
    }
}

