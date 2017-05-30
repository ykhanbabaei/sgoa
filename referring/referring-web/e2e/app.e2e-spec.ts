import { ReferringWebPage } from './app.po';

describe('referring-web App', () => {
  let page: ReferringWebPage;

  beforeEach(() => {
    page = new ReferringWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
