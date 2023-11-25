import { newSpecPage } from '@stencil/core/testing';
import { AdharButton } from './adhar-button';

describe('adhar-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharButton],
      html: '<adhar-button></adhar-button>',
    });
    expect(root).toEqualHtml(`
      <adhar-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharButton],
      html: `<adhar-button first="Stencil" last="'Don't call me a framework' JS"></adhar-button>`,
    });
    expect(root).toEqualHtml(`
      <adhar-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-button>
    `);
  });
});
