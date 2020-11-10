import { newSpecPage } from '@stencil/core/testing';
import { RaiseDark } from '../raise-dark';

describe('raise-dark', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaiseDark],
      html: `<raise-dark></raise-dark>`,
    });
    expect(page.root).toEqualHtml(`
      <raise-dark>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </raise-dark>
    `);
  });
});
