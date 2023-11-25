import { newSpecPage } from '@stencil/core/testing';
import { AdharCheckbox } from './adhar-checkbox';

describe('adhar-checkbox', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharCheckbox],
      html: '<adhar-checkbox></adhar-checkbox>',
    });
    expect(root).toEqualHtml(`
      <adhar-checkbox>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-checkbox>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharCheckbox],
      html: `<adhar-checkbox first="Stencil" last="'Don't call me a framework' JS"></adhar-checkbox>`,
    });
    expect(root).toEqualHtml(`
      <adhar-checkbox first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-checkbox>
    `);
  });
});
