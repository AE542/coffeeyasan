import { TestBed } from '@angular/core/testing';

import { CoffeeShopsCrudService } from './coffee-shops-crud.service';

describe('CoffeeShopsCrudService', () => {
  let service: CoffeeShopsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeShopsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
