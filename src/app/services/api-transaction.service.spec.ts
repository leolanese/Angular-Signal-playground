import { TestBed } from '@angular/core/testing';

import { ApiTransactionService } from './api-transaction.service';

describe('ApiTransactionService', () => {
  let service: ApiTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
