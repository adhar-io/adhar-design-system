import { newSpecPage } from '@stencil/core/testing';
import { AdharPersona } from './adhar-persona';

describe('adhar-persona', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharPersona],
      html: '<adhar-persona></adhar-persona>',
    });
    expect(root).toEqualHtml(`
      <adhar-persona>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-persona>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharPersona],
      html: `<adhar-persona first="Stencil" last="'Don't call me a framework' JS"></adhar-persona>`,
    });
    expect(root).toEqualHtml(`
      <adhar-persona first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-persona>
    `);
  });
});
