import { TestBed } from '@angular/core/testing';

import { AngularAuthService } from './angular-auth.service';

describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularAuthService = TestBed.get(AngularAuthService);
    expect(service).toBeTruthy();
  });
});
