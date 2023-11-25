import { newSpecPage } from '@stencil/core/testing';
import { AdharToast } from './adhar-toast';

describe('adhar-toast', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharToast],
      html: '<adhar-toast></adhar-toast>',
    });
    expect(root).toEqualHtml(`
      <adhar-toast>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-toast>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharToast],
      html: `<adhar-toast first="Stencil" last="'Don't call me a framework' JS"></adhar-toast>`,
    });
    expect(root).toEqualHtml(`
      <adhar-toast first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-toast>
    `);
  });
});
