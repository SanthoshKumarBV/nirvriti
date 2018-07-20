import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    PageHeaderModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
