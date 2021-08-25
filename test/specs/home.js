// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url('https://practice.automationbro.com/');

    // Assert title
    await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
  });

  it('Open About Page & assert URL', async () => {
    // Open About Page
    await browser.url('https://practice.automationbro.com/about');

    // Assert URL
    await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
  });

  it('Click get started btn & assert url contains get-started text', async () => {
    // Open Home Page
    await browser.url('https://practice.automationbro.com');

    // Click get started button
    await $('#get-started').click();

    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining('get-started');
  });

  it('Click logo & assert url DOES NOT contains get-started text', async () => {
    // Open Home Page
    await browser.url('https://practice.automationbro.com');

    // Click logo
    await $('//img[@alt="Practice E-Commerce Site"]').click();

    // Assert url does not contains get-started text
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it.only('Find heading element & assert the text', async () => {
    // Open Home Page
    await browser.url('https://practice.automationbro.com');

    // find heading element
    const headingEl = await $('.elementor-widget-container h1');

    // get the text
    const headingText = await headingEl.getText();

    // Assert the text
    await expect(headingText).toEqual('Think different. Make different!'); // Jest library
    // await expect(headingEl).toHaveText('Think different. Make different!'); // wdio expect assertion
  });
});