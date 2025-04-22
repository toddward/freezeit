import { TestBed } from '@angular/core/testing';

import { FreezerItemService } from './freezer-item.service';

describe('FreezerItemService', () => {
  let service: FreezerItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreezerItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
