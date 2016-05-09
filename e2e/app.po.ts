export class BrstckPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('brstck-app h1')).getText();
  }
}
