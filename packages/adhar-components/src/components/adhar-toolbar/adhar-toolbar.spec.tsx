import { newSpecPage } from '@stencil/core/testing';
import { AdharToolbar } from './adhar-toolbar';

describe('adhar-toolbar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharToolbar],
      html: '<adhar-toolbar></adhar-toolbar>',
    });
    expect(root).toEqualHtml(`
      <adhar-toolbar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-toolbar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharToolbar],
      html: `<adhar-toolbar first="Stencil" last="'Don't call me a framework' JS"></adhar-toolbar>`,
    });
    expect(root).toEqualHtml(`
      <adhar-toolbar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-toolbar>
    `);
  });
});
