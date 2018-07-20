import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
import { DataService } from '../../shared/services/data.service';
declare var $;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    categoryId: any;
    products: any;
    categories: any = [];
    product_prepregnancy: any = [];
    product_postpregnancy: any = [];
    product_babycare: any = [];
    public sliders: Array<any> = [];

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private data: DataService
    ) {
        this.sliderImages();
    }

    ngOnInit() {
        window.scroll(0, 0);
        this.data.changePage("dashboard");
        this.getCategories();
        this.getProducts();
        this.productView();


    }

    productView() {
        setTimeout(() => {
            $('.top-products').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                navSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 1000,
                margin: 30,
                dots: false,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        }, 2000);
    }

    sliderImages() {
        this.sliders.push(
            {
                imagePath: 'assets/images/banner/2.jpg',
                label: 'Pre Pregnancy Product',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/banner/3.jpg',
                label: 'Post Pregnancy Product',
                text: ''
            },
            {
                imagePath: 'assets/images/banner/4.jpg',
                label: 'Baby Care Products',
                text:
                    ''
            }
        );
    }
    getCategories() {
        this.categoryService.getCategories()
            .subscribe((response) => {
                console.log(response);
                this.categories = response['records'];
        })
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe((response) => {
                console.log(response);
                this.products = response['records'];
                this.product_prepregnancy = this.products.filter((el, i) => {
                    return el.product_category_id_fk == 8;
                });
                this.product_postpregnancy = this.products.filter((el, i) => {
                    return el.product_category_id_fk == 10;
                });
                this.product_babycare = this.products.filter((el, i) => {
                    return el.product_category_id_fk == 13;
                });

                for(var i=0;i<this.categories;i++){
                    
                }


                //this.product_prepregnancy.length = 3;
                // this.product_postpregnancy.length = 4;
            });
    }
}
