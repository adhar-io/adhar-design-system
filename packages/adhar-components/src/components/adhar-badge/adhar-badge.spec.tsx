import { newSpecPage } from '@stencil/core/testing';
import { AdharBadge } from './adhar-badge';

describe('adhar-badge', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharBadge],
      html: '<adhar-badge></adhar-badge>',
    });
    expect(root).toEqualHtml(`
      <adhar-badge>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-badge>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharBadge],
      html: `<adhar-badge first="Stencil" last="'Don't call me a framework' JS"></adhar-badge>`,
    });
    expect(root).toEqualHtml(`
      <adhar-badge first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-badge>
    `);
  });
});
