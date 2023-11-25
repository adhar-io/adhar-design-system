import { newSpecPage } from '@stencil/core/testing';
import { AdharInfo } from './adhar-info';

describe('adhar-info', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharInfo],
      html: '<adhar-info></adhar-info>',
    });
    expect(root).toEqualHtml(`
      <adhar-info>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-info>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharInfo],
      html: `<adhar-info first="Stencil" last="'Don't call me a framework' JS"></adhar-info>`,
    });
    expect(root).toEqualHtml(`
      <adhar-info first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-info>
    `);
  });
});
