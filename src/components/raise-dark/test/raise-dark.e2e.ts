import { newE2EPage } from '@stencil/core/testing';

describe('raise-dark', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<raise-dark></raise-dark>');

    const element = await page.find('raise-dark');
    expect(element).toHaveClass('hydrated');
  });
});
