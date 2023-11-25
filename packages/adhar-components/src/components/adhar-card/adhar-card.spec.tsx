import { newSpecPage } from '@stencil/core/testing';
import { AdharCard } from './adhar-card';

describe('adhar-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharCard],
      html: '<adhar-card></adhar-card>',
    });
    expect(root).toEqualHtml(`
      <adhar-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-card>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharCard],
      html: `<adhar-card first="Stencil" last="'Don't call me a framework' JS"></adhar-card>`,
    });
    expect(root).toEqualHtml(`
      <adhar-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-card>
    `);
  });
});
