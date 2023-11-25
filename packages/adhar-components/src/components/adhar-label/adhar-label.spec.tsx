import { newSpecPage } from '@stencil/core/testing';
import { AdharLabel } from './adhar-label';

describe('adhar-label', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharLabel],
      html: '<adhar-label></adhar-label>',
    });
    expect(root).toEqualHtml(`
      <adhar-label>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-label>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharLabel],
      html: `<adhar-label first="Stencil" last="'Don't call me a framework' JS"></adhar-label>`,
    });
    expect(root).toEqualHtml(`
      <adhar-label first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-label>
    `);
  });
});
