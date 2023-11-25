import { newSpecPage } from '@stencil/core/testing';
import { AdharInput } from './adhar-input';

describe('adhar-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharInput],
      html: '<adhar-input></adhar-input>',
    });
    expect(root).toEqualHtml(`
      <adhar-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharInput],
      html: `<adhar-input first="Stencil" last="'Don't call me a framework' JS"></adhar-input>`,
    });
    expect(root).toEqualHtml(`
      <adhar-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-input>
    `);
  });
});
