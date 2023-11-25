import { newSpecPage } from '@stencil/core/testing';
import { AdharField } from './adhar-field';

describe('adhar-field', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharField],
      html: '<adhar-field></adhar-field>',
    });
    expect(root).toEqualHtml(`
      <adhar-field>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-field>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharField],
      html: `<adhar-field first="Stencil" last="'Don't call me a framework' JS"></adhar-field>`,
    });
    expect(root).toEqualHtml(`
      <adhar-field first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-field>
    `);
  });
});
