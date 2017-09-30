import { Shane3Page } from './app.po';

describe('shane3 App', () => {
  let page: Shane3Page;

  beforeEach(() => {
    page = new Shane3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
