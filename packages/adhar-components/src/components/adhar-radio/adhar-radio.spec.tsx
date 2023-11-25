import { newSpecPage } from '@stencil/core/testing';
import { AdharRadio } from './adhar-radio';

describe('adhar-radio', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharRadio],
      html: '<adhar-radio></adhar-radio>',
    });
    expect(root).toEqualHtml(`
      <adhar-radio>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-radio>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharRadio],
      html: `<adhar-radio first="Stencil" last="'Don't call me a framework' JS"></adhar-radio>`,
    });
    expect(root).toEqualHtml(`
      <adhar-radio first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-radio>
    `);
  });
});
