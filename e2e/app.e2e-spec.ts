import { LbdAngularcliPage } from './app.po';

describe('lbd-angularcli App', function() {
  let page: LbdAngularcliPage;

  beforeEach(() => {
    page = new LbdAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
