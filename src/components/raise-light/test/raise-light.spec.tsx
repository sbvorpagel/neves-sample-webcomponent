import { newSpecPage } from '@stencil/core/testing';
import { RaiseLight } from '../raise-light';

describe('raise-light', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaiseLight],
      html: `<raise-light></raise-light>`,
    });
    expect(page.root).toEqualHtml(`
      <raise-light>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </raise-light>
    `);
  });
});
