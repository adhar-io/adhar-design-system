import { newSpecPage } from '@stencil/core/testing';
import { AdharMenu } from './adhar-menu';

describe('adhar-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharMenu],
      html: '<adhar-menu></adhar-menu>',
    });
    expect(root).toEqualHtml(`
      <adhar-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharMenu],
      html: `<adhar-menu first="Stencil" last="'Don't call me a framework' JS"></adhar-menu>`,
    });
    expect(root).toEqualHtml(`
      <adhar-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-menu>
    `);
  });
});
