import { TestBed } from '@angular/core/testing';

import { IssueOrderService } from './issue-order.service';

describe('IssueOrderService', () => {
  let service: IssueOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
