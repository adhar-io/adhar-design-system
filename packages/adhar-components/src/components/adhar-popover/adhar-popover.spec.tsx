import { newSpecPage } from '@stencil/core/testing';
import { AdharPopover } from './adhar-popover';

describe('adhar-popover', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharPopover],
      html: '<adhar-popover></adhar-popover>',
    });
    expect(root).toEqualHtml(`
      <adhar-popover>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-popover>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharPopover],
      html: `<adhar-popover first="Stencil" last="'Don't call me a framework' JS"></adhar-popover>`,
    });
    expect(root).toEqualHtml(`
      <adhar-popover first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-popover>
    `);
  });
});
