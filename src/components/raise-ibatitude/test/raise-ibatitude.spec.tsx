import { newSpecPage } from '@stencil/core/testing';
import { RaiseIbatitude } from '../raise-ibatitude';

describe('raise-ibatitude', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaiseIbatitude],
      html: `<raise-ibatitude></raise-ibatitude>`,
    });
    expect(page.root).toEqualHtml(`
      <raise-ibatitude>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </raise-ibatitude>
    `);
  });
});
