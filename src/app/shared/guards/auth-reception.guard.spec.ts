import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authReceptionGuard } from './auth-reception.guard';

describe('authReceptionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authReceptionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
