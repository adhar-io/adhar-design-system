import { newSpecPage } from '@stencil/core/testing';
import { AdharTooltip } from './adhar-tooltip';

describe('adhar-tooltip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharTooltip],
      html: '<adhar-tooltip></adhar-tooltip>',
    });
    expect(root).toEqualHtml(`
      <adhar-tooltip>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-tooltip>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharTooltip],
      html: `<adhar-tooltip first="Stencil" last="'Don't call me a framework' JS"></adhar-tooltip>`,
    });
    expect(root).toEqualHtml(`
      <adhar-tooltip first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-tooltip>
    `);
  });
});
