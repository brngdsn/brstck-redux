import { BrstckPage } from './app.po';

describe('brstck App', function() {
  let page: BrstckPage;

  beforeEach(() => {
    page = new BrstckPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('brstck works!');
  });
});
