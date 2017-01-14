import { FinancialsappPage } from './app.po';

describe('financialsapp App', function() {
  let page: FinancialsappPage;

  beforeEach(() => {
    page = new FinancialsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
