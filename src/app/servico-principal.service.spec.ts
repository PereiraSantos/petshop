import { TestBed } from '@angular/core/testing';

import { ServicoPrincipalService } from './servico-principal.service';

describe('ServicoPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoPrincipalService = TestBed.get(ServicoPrincipalService);
    expect(service).toBeTruthy();
  });
});
