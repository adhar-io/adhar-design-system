import { newSpecPage } from '@stencil/core/testing';
import { AdharDropdown } from './adhar-dropdown';

describe('adhar-dropdown', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharDropdown],
      html: '<adhar-dropdown></adhar-dropdown>',
    });
    expect(root).toEqualHtml(`
      <adhar-dropdown>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-dropdown>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharDropdown],
      html: `<adhar-dropdown first="Stencil" last="'Don't call me a framework' JS"></adhar-dropdown>`,
    });
    expect(root).toEqualHtml(`
      <adhar-dropdown first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-dropdown>
    `);
  });
});
