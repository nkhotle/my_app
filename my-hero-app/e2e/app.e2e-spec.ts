import { MyHeroAppPage } from './app.po';

describe('my-hero-app App', function() {
  let page: MyHeroAppPage;

  beforeEach(() => {
    page = new MyHeroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
