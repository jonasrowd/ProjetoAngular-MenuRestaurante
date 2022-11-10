import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get('/');
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }

}
