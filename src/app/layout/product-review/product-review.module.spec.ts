import { ProductReviewModule } from './product-review.module';

describe('ProductReviewModule', () => {
  let productReviewModule: ProductReviewModule;

  beforeEach(() => {
    productReviewModule = new ProductReviewModule();
  });

  it('should create an instance', () => {
    expect(productReviewModule).toBeTruthy();
  });
});
