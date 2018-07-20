import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductReviewRoutingModule } from './product-review-routing.module';
import { ProductReviewComponent } from './product-review.component';

@NgModule({
  imports: [
    CommonModule,
    ProductReviewRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [ProductReviewComponent]
})
export class ProductReviewModule { }
