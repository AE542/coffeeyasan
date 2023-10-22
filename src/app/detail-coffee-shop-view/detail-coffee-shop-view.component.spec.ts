import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCoffeeShopViewComponent } from './detail-coffee-shop-view.component';

describe('DetailCoffeeShopViewComponent', () => {
  let component: DetailCoffeeShopViewComponent;
  let fixture: ComponentFixture<DetailCoffeeShopViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCoffeeShopViewComponent]
    });
    fixture = TestBed.createComponent(DetailCoffeeShopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
