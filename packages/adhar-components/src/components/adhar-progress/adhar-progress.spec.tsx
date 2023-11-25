import { newSpecPage } from '@stencil/core/testing';
import { AdharProgress } from './adhar-progress';

describe('adhar-progress', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharProgress],
      html: '<adhar-progress></adhar-progress>',
    });
    expect(root).toEqualHtml(`
      <adhar-progress>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-progress>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharProgress],
      html: `<adhar-progress first="Stencil" last="'Don't call me a framework' JS"></adhar-progress>`,
    });
    expect(root).toEqualHtml(`
      <adhar-progress first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-progress>
    `);
  });
});
