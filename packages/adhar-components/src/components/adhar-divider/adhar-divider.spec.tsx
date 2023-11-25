import { newSpecPage } from '@stencil/core/testing';
import { AdharDivider } from './adhar-divider';

describe('adhar-divider', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharDivider],
      html: '<adhar-divider></adhar-divider>',
    });
    expect(root).toEqualHtml(`
      <adhar-divider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-divider>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharDivider],
      html: `<adhar-divider first="Stencil" last="'Don't call me a framework' JS"></adhar-divider>`,
    });
    expect(root).toEqualHtml(`
      <adhar-divider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-divider>
    `);
  });
});
