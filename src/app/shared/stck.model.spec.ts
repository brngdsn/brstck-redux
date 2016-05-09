import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Stck} from './stck.model';

describe('Stck', () => {
  it('should create an instance', () => {
    expect(new Stck()).toBeTruthy();
  });
});
