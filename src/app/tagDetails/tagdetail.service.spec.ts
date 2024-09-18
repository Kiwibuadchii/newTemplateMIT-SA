import { TestBed } from '@angular/core/testing';

import { TagdetailService } from './tagdetail.service';

describe('TagdetailService', () => {
  let service: TagdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
