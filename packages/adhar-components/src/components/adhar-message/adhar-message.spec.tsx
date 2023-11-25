import { newSpecPage } from '@stencil/core/testing';
import { AdharMessage } from './adhar-message';

describe('adhar-message', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharMessage],
      html: '<adhar-message></adhar-message>',
    });
    expect(root).toEqualHtml(`
      <adhar-message>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-message>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharMessage],
      html: `<adhar-message first="Stencil" last="'Don't call me a framework' JS"></adhar-message>`,
    });
    expect(root).toEqualHtml(`
      <adhar-message first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-message>
    `);
  });
});
