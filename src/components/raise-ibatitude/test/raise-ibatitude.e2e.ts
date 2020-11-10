import { newE2EPage } from '@stencil/core/testing';

describe('raise-ibatitude', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<raise-ibatitude></raise-ibatitude>');

    const element = await page.find('raise-ibatitude');
    expect(element).toHaveClass('hydrated');
  });
});
