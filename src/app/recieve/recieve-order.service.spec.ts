import { TestBed } from '@angular/core/testing';

import { RecieveOrderService } from './recieve-order.service';

describe('RecieveOrderService', () => {
  let service: RecieveOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecieveOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
