import { newSpecPage } from '@stencil/core/testing';
import { AdharSwitch } from './adhar-switch';

describe('adhar-switch', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharSwitch],
      html: '<adhar-switch></adhar-switch>',
    });
    expect(root).toEqualHtml(`
      <adhar-switch>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-switch>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharSwitch],
      html: `<adhar-switch first="Stencil" last="'Don't call me a framework' JS"></adhar-switch>`,
    });
    expect(root).toEqualHtml(`
      <adhar-switch first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-switch>
    `);
  });
});
