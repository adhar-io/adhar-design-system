import { newSpecPage } from '@stencil/core/testing';
import { AdharSpinner } from './adhar-spinner';

describe('adhar-spinner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharSpinner],
      html: '<adhar-spinner></adhar-spinner>',
    });
    expect(root).toEqualHtml(`
      <adhar-spinner>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-spinner>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharSpinner],
      html: `<adhar-spinner first="Stencil" last="'Don't call me a framework' JS"></adhar-spinner>`,
    });
    expect(root).toEqualHtml(`
      <adhar-spinner first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-spinner>
    `);
  });
});
