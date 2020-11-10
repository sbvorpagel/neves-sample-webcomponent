import { newE2EPage } from '@stencil/core/testing';

describe('raise-light', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<raise-light></raise-light>');

    const element = await page.find('raise-light');
    expect(element).toHaveClass('hydrated');
  });
});
