import { newE2EPage } from '@stencil/core/testing';

describe('raise-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<raise-form></raise-form>');

    const element = await page.find('raise-form');
    expect(element).toHaveClass('hydrated');
  });
});
