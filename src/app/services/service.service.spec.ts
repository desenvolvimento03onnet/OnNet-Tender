import { ServiceProduto } from './service.service.produto';
import { TestBed } from '@angular/core/testing';

describe('ServiceProduto', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProduto = TestBed.get(ServiceProduto);
    expect(service).toBeTruthy();
  });
});
