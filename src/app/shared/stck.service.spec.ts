import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StckService } from './stck.service';

describe('Stck Service', () => {
  beforeEachProviders(() => [StckService]);

  it('should ...',
      inject([StckService], (service: StckService) => {
    expect(service).toBeTruthy();
  }));
});
