import { TestBed } from '@angular/core/testing';

import { PruebaCiudadService } from './prueba-ciudad.service';

describe('PruebaCiudadService', () => {
  let service: PruebaCiudadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaCiudadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
