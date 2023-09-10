import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeshopsComponent } from './coffeeshops.component';

describe('CoffeeshopsComponent', () => {
  let component: CoffeeshopsComponent;
  let fixture: ComponentFixture<CoffeeshopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeshopsComponent]
    });
    fixture = TestBed.createComponent(CoffeeshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
