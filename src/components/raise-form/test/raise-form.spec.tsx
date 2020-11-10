import { newSpecPage } from '@stencil/core/testing';
import { RaiseForm } from '../raise-form';

describe('raise-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RaiseForm],
      html: `<raise-form></raise-form>`,
    });
    expect(page.root).toEqualHtml(`
      <raise-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </raise-form>
    `);
  });
});
