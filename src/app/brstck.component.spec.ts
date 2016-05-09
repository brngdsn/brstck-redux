import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BrstckAppComponent } from '../app/brstck.component';

beforeEachProviders(() => [BrstckAppComponent]);

describe('App: Brstck', () => {
  it('should create the app',
      inject([BrstckAppComponent], (app: BrstckAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'brstck works!\'',
      inject([BrstckAppComponent], (app: BrstckAppComponent) => {
    expect(app.title).toEqual('brstck works!');
  }));
});
