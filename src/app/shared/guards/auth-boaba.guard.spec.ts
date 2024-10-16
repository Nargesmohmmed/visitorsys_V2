import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authBoabaGuard } from './auth-boaba.guard';

describe('authBoabaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authBoabaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
