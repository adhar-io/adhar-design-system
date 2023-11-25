import { newSpecPage } from '@stencil/core/testing';
import { AdharLink } from './adhar-link';

describe('adhar-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharLink],
      html: '<adhar-link></adhar-link>',
    });
    expect(root).toEqualHtml(`
      <adhar-link>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-link>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharLink],
      html: `<adhar-link first="Stencil" last="'Don't call me a framework' JS"></adhar-link>`,
    });
    expect(root).toEqualHtml(`
      <adhar-link first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-link>
    `);
  });
});
