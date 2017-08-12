import { WhatsAuthClientPage } from './app.po';

describe('whats-auth-client App', () => {
  let page: WhatsAuthClientPage;

  beforeEach(() => {
    page = new WhatsAuthClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
